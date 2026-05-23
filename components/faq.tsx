import { faqs } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

type FaqItem = {
  question: string;
  answer: string;
};

export function FAQ({ items = faqs }: { items?: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className="section-pad bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-pad">
        <SectionHeading
          eyebrow="FAQ"
          title="Transport and logistics questions, answered."
          description="A quick overview of how our cargo transport, logistics services, and truck dispatch workflows operate."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {items.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-base font-bold text-ink">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
