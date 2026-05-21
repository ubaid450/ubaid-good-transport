"use client";

import { useEffect, useMemo, useState } from "react";
import type { CmsBlogPost, CmsContent, CmsImage } from "@/lib/cms";

type Section =
  | "overview"
  | "homepage"
  | "services"
  | "blog"
  | "images"
  | "fleet"
  | "testimonials"
  | "faqs"
  | "routes"
  | "seo"
  | "settings";

type CmsEditorProps = {
  section: Section;
};

const inputClass = "focus-ring min-h-11 rounded-md border border-slate-200 px-3 text-sm font-normal";
const textareaClass = "focus-ring rounded-md border border-slate-200 px-3 py-3 text-sm font-normal";

export function CmsEditor({ section }: CmsEditorProps) {
  const [content, setContent] = useState<CmsContent | null>(null);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((response) => response.json())
      .then((data: CmsContent) => setContent(data));
  }, []);

  const title = useMemo(() => {
    const titles: Record<Section, string> = {
      overview: "Website Overview",
      homepage: "Homepage Content",
      services: "Services",
      blog: "Blog Posts",
      images: "Image Uploads",
      fleet: "Fleet / Trucks",
      testimonials: "Testimonials",
      faqs: "FAQ Section",
      routes: "Cities & Routes",
      seo: "SEO Metadata",
      settings: "Company Settings"
    };

    return titles[section];
  }, [section]);

  if (!content) {
    return <div className="rounded-lg bg-white p-6 shadow-sm">Loading CMS content...</div>;
  }

  async function save(nextContent = content) {
    if (!nextContent) return;
    setStatus("Saving...");
    await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nextContent)
    });
    setContent({ ...nextContent });
    setStatus("Saved successfully.");
  }

  async function uploadImage(event: React.ChangeEvent<HTMLInputElement>, type: CmsImage["type"]) {
    const file = event.target.files?.[0];
    if (!file || !content) return;
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    form.append("type", type);
    const response = await fetch("/api/admin/upload", { method: "POST", body: form });
    const result = (await response.json()) as { url?: string };
    const refreshed = await fetch("/api/admin/content").then((res) => res.json()) as CmsContent;
    setContent(refreshed);
    setUploading(false);
    setStatus(result.url ? `Uploaded ${result.url}` : "Upload failed.");
  }

  const card = (children: React.ReactNode) => (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">{children}</section>
  );

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase text-brand-600">Admin CMS</p>
          <h1 className="text-3xl font-black text-ink">{title}</h1>
        </div>
        <div className="flex items-center gap-3">
          {status ? <p className="text-sm font-semibold text-brand-700">{status}</p> : null}
          <button onClick={() => save()} className="focus-ring rounded-md bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700">
            Save Changes
          </button>
        </div>
      </div>

      {section === "overview" ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Services", content.services.length],
            ["Blog posts", content.blogPosts.length],
            ["Fleet items", content.fleet.length],
            ["Images", content.images.length]
          ].map(([label, value]) => card(<><p className="text-sm font-bold uppercase text-slate-500">{label}</p><p className="mt-3 text-4xl font-black text-brand-700">{value}</p></>))}
        </div>
      ) : null}

      {section === "settings" ? card(
        <div className="grid gap-4 md:grid-cols-2">
          {(["name", "tagline", "phone", "whatsapp", "email", "address"] as const).map((field) => (
            <label key={field} className="grid gap-2 text-sm font-semibold text-ink">
              {field}
              <input className={inputClass} value={content.company[field]} onChange={(event) => setContent({ ...content, company: { ...content.company, [field]: event.target.value } })} />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-semibold text-ink md:col-span-2">
            Logo upload
            <input type="file" accept="image/*" onChange={(event) => uploadImage(event, "logo")} className={inputClass} />
          </label>
          <p className="text-sm text-slate-600 md:col-span-2">Current logo URL: {content.company.logoUrl || "Using generated logo"}</p>
        </div>
      ) : null}

      {section === "homepage" ? card(
        <div className="grid gap-4">
          {(["heroEyebrow", "heroTitle", "heroDescription", "introTitle", "introDescription", "heroImage"] as const).map((field) => (
            <label key={field} className="grid gap-2 text-sm font-semibold text-ink">
              {field}
              {field.includes("Description") ? (
                <textarea rows={4} className={textareaClass} value={content.homepage[field]} onChange={(event) => setContent({ ...content, homepage: { ...content.homepage, [field]: event.target.value } })} />
              ) : (
                <input className={inputClass} value={content.homepage[field]} onChange={(event) => setContent({ ...content, homepage: { ...content.homepage, [field]: event.target.value } })} />
              )}
            </label>
          ))}
        </div>
      ) : null}

      {section === "seo" ? card(
        <div className="grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-ink">Meta title<input className={inputClass} value={content.seo.title} onChange={(event) => setContent({ ...content, seo: { ...content.seo, title: event.target.value } })} /></label>
          <label className="grid gap-2 text-sm font-semibold text-ink">Meta description<textarea rows={4} className={textareaClass} value={content.seo.description} onChange={(event) => setContent({ ...content, seo: { ...content.seo, description: event.target.value } })} /></label>
          <label className="grid gap-2 text-sm font-semibold text-ink">Keywords<textarea rows={3} className={textareaClass} value={content.seo.keywords} onChange={(event) => setContent({ ...content, seo: { ...content.seo, keywords: event.target.value } })} /></label>
        </div>
      ) : null}

      {section === "services" ? (
        <ArrayEditor
          items={content.services}
          createItem={() => ({ id: `service-${Date.now()}`, title: "New Service", description: "Service description", icon: "Truck" })}
          onChange={(services) => setContent({ ...content, services })}
          render={(item, index, update) => (
            <>
              <input className={inputClass} value={item.title} onChange={(event) => update(index, { ...item, title: event.target.value })} placeholder="Service title" />
              <input className={inputClass} value={item.icon} onChange={(event) => update(index, { ...item, icon: event.target.value })} placeholder="Icon name" />
              <textarea rows={3} className={`${textareaClass} md:col-span-2`} value={item.description} onChange={(event) => update(index, { ...item, description: event.target.value })} />
            </>
          )}
        />
      ) : null}

      {section === "fleet" ? (
        <ArrayEditor
          items={content.fleet}
          createItem={() => ({ id: `truck-${Date.now()}`, name: "New Truck", capacity: "Capacity", use: "Best use", image: "" })}
          onChange={(fleet) => setContent({ ...content, fleet })}
          render={(item, index, update) => (
            <>
              <input className={inputClass} value={item.name} onChange={(event) => update(index, { ...item, name: event.target.value })} />
              <input className={inputClass} value={item.capacity} onChange={(event) => update(index, { ...item, capacity: event.target.value })} />
              <input className={`${inputClass} md:col-span-2`} value={item.image} onChange={(event) => update(index, { ...item, image: event.target.value })} placeholder="Image URL" />
              <textarea rows={3} className={`${textareaClass} md:col-span-2`} value={item.use} onChange={(event) => update(index, { ...item, use: event.target.value })} />
            </>
          )}
        />
      ) : null}

      {section === "testimonials" ? (
        <ArrayEditor
          items={content.testimonials}
          createItem={() => ({ id: `testimonial-${Date.now()}`, quote: "Customer quote", name: "Customer Name", role: "Customer Role" })}
          onChange={(testimonials) => setContent({ ...content, testimonials })}
          render={(item, index, update) => (
            <>
              <input className={inputClass} value={item.name} onChange={(event) => update(index, { ...item, name: event.target.value })} />
              <input className={inputClass} value={item.role} onChange={(event) => update(index, { ...item, role: event.target.value })} />
              <textarea rows={3} className={`${textareaClass} md:col-span-2`} value={item.quote} onChange={(event) => update(index, { ...item, quote: event.target.value })} />
            </>
          )}
        />
      ) : null}

      {section === "faqs" ? (
        <ArrayEditor
          items={content.faqs}
          createItem={() => ({ id: `faq-${Date.now()}`, question: "New question?", answer: "Answer text" })}
          onChange={(faqs) => setContent({ ...content, faqs })}
          render={(item, index, update) => (
            <>
              <input className={`${inputClass} md:col-span-2`} value={item.question} onChange={(event) => update(index, { ...item, question: event.target.value })} />
              <textarea rows={3} className={`${textareaClass} md:col-span-2`} value={item.answer} onChange={(event) => update(index, { ...item, answer: event.target.value })} />
            </>
          )}
        />
      ) : null}

      {section === "routes" ? card(
        <div className="grid gap-4 md:grid-cols-2">
          <ListTextArea label="Cities" items={content.cities} onChange={(cities) => setContent({ ...content, cities })} />
          <ListTextArea label="Transport routes" items={content.routes} onChange={(routes) => setContent({ ...content, routes })} />
        </div>
      ) : null}

      {section === "images" ? card(
        <div className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-3">
            {(["logo", "truck", "website"] as const).map((type) => (
              <label key={type} className="grid gap-2 text-sm font-semibold text-ink">
                Upload {type} image
                <input type="file" accept="image/*" onChange={(event) => uploadImage(event, type)} className={inputClass} />
              </label>
            ))}
          </div>
          {uploading ? <p className="text-sm font-semibold text-brand-700">Uploading image...</p> : null}
          <div className="grid gap-4 md:grid-cols-3">
            {content.images.map((image) => (
              <div key={image.id} className="rounded-lg border border-slate-200 p-3">
                <img src={image.url} alt={image.title} className="aspect-video w-full rounded-md object-cover" />
                <p className="mt-2 text-sm font-bold text-ink">{image.title}</p>
                <p className="text-xs text-slate-500">{image.url}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {section === "blog" ? (
        <ArrayEditor
          items={content.blogPosts}
          createItem={() => ({ slug: `new-blog-post-${Date.now()}`, title: "New Blog Post", excerpt: "Short SEO excerpt", content: "<p>Write blog content here.</p>", date: new Date().toISOString().slice(0, 10), category: "Transport", readTime: "4 min read", metaTitle: "New Blog Post", metaDescription: "SEO description" })}
          onChange={(blogPosts) => setContent({ ...content, blogPosts })}
          render={(item, index, update) => (
            <>
              <input className={inputClass} value={item.title} onChange={(event) => update(index, { ...item, title: event.target.value })} placeholder="Title" />
              <input className={inputClass} value={item.slug} onChange={(event) => update(index, { ...item, slug: event.target.value })} placeholder="slug" />
              <input className={inputClass} value={item.category} onChange={(event) => update(index, { ...item, category: event.target.value })} />
              <input className={inputClass} value={item.readTime} onChange={(event) => update(index, { ...item, readTime: event.target.value })} />
              <textarea rows={3} className={`${textareaClass} md:col-span-2`} value={item.excerpt} onChange={(event) => update(index, { ...item, excerpt: event.target.value })} placeholder="Excerpt" />
              <RichTextField value={item.content} onChange={(value) => update(index, { ...item, content: value })} />
              <input className={inputClass} value={item.metaTitle} onChange={(event) => update(index, { ...item, metaTitle: event.target.value })} placeholder="Meta title" />
              <input className={inputClass} value={item.metaDescription} onChange={(event) => update(index, { ...item, metaDescription: event.target.value })} placeholder="Meta description" />
            </>
          )}
        />
      ) : null}
    </div>
  );
}

function ArrayEditor<T>({ items, createItem, onChange, render }: {
  items: T[];
  createItem: () => T;
  onChange: (items: T[]) => void;
  render: (item: T, index: number, update: (index: number, item: T) => void) => React.ReactNode;
}) {
  function update(index: number, item: T) {
    onChange(items.map((current, currentIndex) => (currentIndex === index ? item : current)));
  }

  return (
    <div className="grid gap-5">
      <button onClick={() => onChange([...items, createItem()])} className="focus-ring w-fit rounded-md bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700">
        Add Item
      </button>
      {items.map((item, index) => (
        <section key={index} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">{render(item, index, update)}</div>
          <button onClick={() => onChange(items.filter((_, currentIndex) => currentIndex !== index))} className="mt-4 rounded-md border border-red-200 px-4 py-2 text-sm font-bold text-red-700 hover:bg-red-50">
            Delete
          </button>
        </section>
      ))}
    </div>
  );
}

function ListTextArea({ label, items, onChange }: { label: string; items: string[]; onChange: (items: string[]) => void }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <textarea rows={10} className={textareaClass} value={items.join("\n")} onChange={(event) => onChange(event.target.value.split("\n").filter(Boolean))} />
    </label>
  );
}

function RichTextField({ value, onChange }: { value: CmsBlogPost["content"]; onChange: (value: string) => void }) {
  const buttons = [
    ["Heading", "<h2>Heading</h2>"],
    ["Paragraph", "<p>Paragraph text</p>"],
    ["Bold", "<strong>bold text</strong>"],
    ["List", "<ul><li>List item</li></ul>"]
  ];

  return (
    <div className="grid gap-2 md:col-span-2">
      <p className="text-sm font-semibold text-ink">Blog rich text HTML</p>
      <div className="flex flex-wrap gap-2">
        {buttons.map(([label, snippet]) => (
          <button key={label} type="button" onClick={() => onChange(`${value}\n${snippet}`)} className="rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-ink hover:bg-brand-50">
            {label}
          </button>
        ))}
      </div>
      <textarea rows={8} className={textareaClass} value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
