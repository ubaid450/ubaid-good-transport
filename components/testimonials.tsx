import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function Testimonials({ items = testimonials }: { items?: Testimonial[] }) {
  return (
    <section className="section-pad bg-brand-900 text-white">
      <div className="container-pad">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase text-blue-200">Customer testimonials</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Trusted by shippers, operators, and supply chain teams.</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.name} className="rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur">
              <Quote aria-hidden="true" className="h-8 w-8 text-blue-200" />
              <p className="mt-5 text-base leading-8 text-blue-50">“{item.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-bold">{item.name}</p>
                <p className="mt-1 text-sm text-blue-100">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
