import Image from "next/image";

type FleetCardProps = {
  name: string;
  capacity: string;
  use: string;
  image: string;
};

export function FleetCard({ name, capacity, use, image }: FleetCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <div className="relative aspect-[16/10]">
        <Image src={image} alt={`${name} logistics truck`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-ink">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-brand-700">{capacity}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600">{use}</p>
      </div>
    </article>
  );
}
