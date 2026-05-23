type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-brand-900 py-20 text-white sm:py-24">
      <div className="container-pad max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase text-blue-200">{eyebrow}</p>
        <h1 className="text-4xl font-black sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">{description}</p>
      </div>
    </section>
  );
}
