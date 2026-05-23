import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getCmsContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Logistics Blog",
  description: "Ubaid Good Transport blog articles for transport company in Pakistan, house shifting services, loading services Pakistan, cargo transport, and truck dispatch Pakistan."
};

export default async function BlogPage() {
  const cms = await getCmsContent();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Transport and logistics guides for Pakistan."
        description="SEO-friendly articles targeting transport company in Pakistan, house shifting services, loading services Pakistan, truck dispatch Pakistan, and cargo transport Lahore Karachi."
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-5 lg:grid-cols-3">
          {cms.blogPosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <p className="text-sm font-bold uppercase text-brand-600">{post.category}</p>
              <h2 className="mt-4 text-2xl font-bold text-ink">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-PK", { month: "long", day: "numeric", year: "numeric" })}</time>
                <span>{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900">
                Read article
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
