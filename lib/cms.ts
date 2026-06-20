import { getMongoDb } from "@/lib/mongodb";

export type CmsService = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type CmsBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
};

export type CmsImage = {
  id: string;
  title: string;
  url: string;
  type: "logo" | "truck" | "website";
};

export type CmsContent = {
  company: {
    name: string;
    tagline: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    logoUrl: string;
  };
  homepage: {
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    introTitle: string;
    introDescription: string;
    heroImage: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  services: CmsService[];
  cities: string[];
  routes: string[];
  testimonials: Array<{ id: string; quote: string; name: string; role: string }>;
  faqs: Array<{ id: string; question: string; answer: string }>;
  fleet: Array<{ id: string; name: string; capacity: string; use: string; image: string }>;
  blogPosts: CmsBlogPost[];
  images: CmsImage[];
};

export const defaultCmsContent: CmsContent = {
  company: {
    name: "Ubaid Goods Transport",
    tagline: "Cargo | Loading | Logistics",
    phone: "03234125101",
    whatsapp: "923234125101",
    email: "info@ubaidgoodstransport.com",
    address: "Main Transport Hub, Lahore, Pakistan",
    logoUrl: "",
  },
  homepage: {
    heroEyebrow: "Transport company in Pakistan",
    heroTitle:
      "Reliable goods transport, cargo delivery, loading, house shifting, and logistics services across Pakistan.",
    heroDescription:
      "Ubaid Goods Transport connects Lahore, Karachi, Multan, Rawalpindi, and all Pakistan routes with reliable trucks, careful loading teams, and fast WhatsApp booking.",
    introTitle:
      "Full-service transport support for homes, businesses, cargo, and long routes.",
    introDescription:
      "From loading services and house shifting to cargo transport and truck dispatch, Ubaid Goods Transport gives customers a professional logistics partner across Pakistan.",
    heroImage:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80",
  },
  seo: {
    title: "Ubaid Goods Transport | Transport Company in Pakistan",
    description:
      "Cargo transport, loading services, house shifting, truck dispatch, and logistics services in Lahore, Karachi, Multan, Rawalpindi, and all over Pakistan.",
    keywords:
      "Transport company in Pakistan, House shifting services, Loading services Pakistan, Truck dispatch Pakistan, Logistics company Pakistan, Cargo transport Lahore Karachi",
  },
  services: [
    {
      id: "loading",
      title: "Loading Services",
      description:
        "Professional loading and unloading teams for homes, offices, shops, warehouses, and commercial goods.",
      icon: "Boxes",
    },
    {
      id: "house-shifting",
      title: "House Shifting",
      description:
        "Careful house shifting services with packing support, labor, transport, and door-to-door coordination.",
      icon: "Home",
    },
    {
      id: "cargo",
      title: "Cargo Transport",
      description:
        "Reliable cargo transport from Lahore to Karachi, Multan, Rawalpindi, and all major Pakistan routes.",
      icon: "PackageCheck",
    },
    {
      id: "dispatch",
      title: "Truck Dispatch",
      description:
        "Truck dispatch Pakistan services with route planning, driver coordination, and delivery updates.",
      icon: "Headphones",
    },
    {
      id: "logistics",
      title: "Logistics Services",
      description:
        "End-to-end logistics services for goods movement, pickup scheduling, documentation, and delivery.",
      icon: "Route",
    },
    {
      id: "goods",
      title: "Goods Transport",
      description:
        "Secure goods transport for businesses, families, retailers, factories, and distributors.",
      icon: "Warehouse",
    },
  ],
  cities: ["Lahore", "Karachi", "Multan", "Rawalpindi", "All Pakistan"],
  routes: [
    "Lahore to Karachi",
    "Lahore to Multan",
    "Karachi to Rawalpindi",
    "All Pakistan long route delivery",
  ],
  testimonials: [
    {
      id: "t1",
      quote:
        "Ubaid Goods Transport handled our Lahore to Karachi cargo with clear updates and careful loading.",
      name: "Ahmed Raza",
      role: "Retail Distributor, Lahore",
    },
    {
      id: "t2",
      quote:
        "Their house shifting team packed and loaded everything carefully. Booking on WhatsApp was simple.",
      name: "Sana Malik",
      role: "House Shifting Customer",
    },
  ],
  faqs: [
    {
      id: "f1",
      question: "What services does Ubaid Goods Transport provide?",
      answer:
        "We provide loading services, house shifting, cargo transport, truck dispatch, goods transport, logistics services, and long route delivery across Pakistan.",
    },
    {
      id: "f2",
      question: "Can I book by WhatsApp?",
      answer:
        "Yes. Call or WhatsApp 03234125101 to request a quick quote, book a truck, or ask about loading and house shifting services.",
    },
  ],
  fleet: [
    {
      id: "container",
      name: "Container Trucks",
      capacity: "Commercial cargo capacity",
      use: "Retail goods, cartons, palletized cargo, and intercity transport",
      
        image: "/images/fleet/Container-truck.png.png",
    },
    {
      id: "flatbed",
      name: "Flatbed Trucks",
      capacity: "Heavy goods capacity",
      use: "Machinery, steel, construction material, and oversized goods",
      
     image: "/images/fleet/Flatbed-truck.png.png",    
    },
    {
      id: "mazda",
      name: "Mazda & Cargo Trucks",
      capacity: "House shifting and city cargo",
      use: "Furniture, home goods, office shifting, and local deliveries",
      
        image: "/images/fleet/Mazda-truck.png.png",
    },
  ],
  blogPosts: [
    {
      slug: "transport-company-in-pakistan-guide",
      title: "How to Choose a Transport Company in Pakistan",
      image: "/images/blog/transport-company.jpg",
      excerpt:
        "A practical guide for comparing cargo transport, loading support, long route delivery, and logistics services across Pakistan.",
      content:
        "<p>Choose a transport company with reliable trucks, clear communication, careful loading teams, and experience on Pakistan routes.</p>",
      date: "2026-04-18",
      category: "Transport Pakistan",
      readTime: "5 min read",
      metaTitle: "How to Choose a Transport Company in Pakistan",
      metaDescription:
        "Compare cargo transport, loading support, route coverage, and logistics services in Pakistan.",
    },
    {
slug: "house-shifting-cost-in-pakistan-2026-guide",
title: "House Shifting Cost in Pakistan (2026 Complete Guide)",
excerpt:
"Learn about house shifting costs in Pakistan, factors affecting moving charges, and how to book reliable house shifting services.",
content:
"<h2>House Shifting Cost in Pakistan</h2><p>House shifting costs in Pakistan depend on distance, number of items, truck size, labor requirements, and additional services such as packing and loading.</p><h2>Average House Shifting Charges</h2><p>Within the same city, moving costs are usually lower than intercity moves. Charges vary according to household size and transport requirements.</p><h2>Factors That Affect Moving Costs</h2><ul><li>Pickup and delivery location</li><li>Truck size and availability</li><li>Loading and unloading labor</li><li>Packing requirements</li><li>Distance between cities</li></ul><h2>How to Reduce House Shifting Costs</h2><p>Plan your move early, prepare an inventory, and request quotes in advance to find suitable transport options.</p><h2>Book Professional House Shifting Services</h2><p>Ubaid Goods Transport provides house shifting, loading services, and truck booking across Pakistan with reliable support and transport coordination.</p>",
date: "2026-06-19",
category: "House Shifting",
readTime: "6 min read",
metaTitle: "House Shifting Cost in Pakistan (2026 Complete Guide)",
metaDescription:
"Learn about house shifting costs in Pakistan, moving charges, truck booking, loading services, and practical tips for planning your move."
},
  ],
  images: [],
};

function mergeCmsContent(saved: Partial<CmsContent> | null | undefined): CmsContent {
  return {
    ...defaultCmsContent,
    ...(saved || {}),
    company: {
      ...defaultCmsContent.company,
      ...(saved?.company || {}),
    },
    homepage: {
      ...defaultCmsContent.homepage,
      ...(saved?.homepage || {}),
    },
    seo: {
      ...defaultCmsContent.seo,
      ...(saved?.seo || {}),
    },
  };
}

export async function getCmsContent(): Promise<CmsContent> {
  const db = await getMongoDb();

  const doc = await db.collection("cms").findOne({ key: "main" });

  if (!doc?.content) {
    await saveCmsContent(defaultCmsContent);
    return defaultCmsContent;
  }

  return mergeCmsContent(doc.content as Partial<CmsContent>);
}

export async function saveCmsContent(content: CmsContent) {
  const db = await getMongoDb();

  await db.collection("cms").updateOne(
    { key: "main" },
    {
      $set: {
        key: "main",
        content,
        updatedAt: new Date(),
      },
      $setOnInsert: {
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );
}