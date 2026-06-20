import {
  BadgeCheck,
  Boxes,
  Clock3,
  Container,
  Globe2,
  Headphones,
  Home,
  MapPinned,
  PackageCheck,
  Route,
  ShieldCheck,
  Truck,
  Warehouse
} from "lucide-react";

export const siteConfig = {
  name: "Ubaid Goods Transport",
  shortName: "UGT",
  url: "https://ubaidgoodstransport.com",
  phone: "03234125101",
  whatsapp: "923234125101",
email: "ubaidtransport5482@gmail.com",
  address: "Main Transport Hub, Karachi, Pakistan",
  serviceAreas: ["Lahore", "Karachi", "Multan", "Rawalpindi", "All Over Pakistan"],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
    { label: "Instagram", href: "https://www.instagram.com" }
  ]
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "House Shifting", href: "/house-shifting" },
  { label: "Loading", href: "/loading-services" },
  { label: "Quote", href: "/quote" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "Loading Services",
    description: "Professional loading and unloading teams for homes, offices, shops, warehouses, and commercial goods.",
    icon: Boxes
  },
  {
    title: "House Shifting",
    description: "Careful house shifting services with packing support, labor, transport, and door-to-door coordination.",
    icon: Home
  },
  {
    title: "Cargo Transport",
    description: "Reliable cargo transport from Lahore to Karachi, Multan, Rawalpindi, and all major Pakistan routes.",
    icon: PackageCheck
  },
  {
    title: "Truck Dispatch",
    description: "Truck dispatch Pakistan services with route planning, driver coordination, and delivery updates.",
    icon: Headphones
  },
  {
    title: "Logistics Services",
    description: "End-to-end logistics services for goods movement, pickup scheduling, documentation, and delivery.",
    icon: Route
  },
  {
    title: "Goods Transport",
    description: "Secure goods transport for businesses, families, retailers, factories, and distributors.",
    icon: Warehouse
  },
  {
    title: "Long Route Delivery",
    description: "Intercity long route delivery for cargo, furniture, commercial stock, and heavy goods.",
    icon: Container
  },
  {
    title: "All Pakistan Transport",
    description: "Transport coverage across Lahore, Karachi, Multan, Rawalpindi, and nationwide destinations.",
    icon: Globe2
  }
];

export const advantages = [
  { title: "Fast WhatsApp booking", description: "Quick quotes and transport coordination directly through call or WhatsApp.", icon: Clock3 },
  { title: "Careful goods handling", description: "Experienced loading teams handle household and commercial items with care.", icon: ShieldCheck },
  { title: "Pakistan route coverage", description: "Daily support for Lahore, Karachi, Multan, Rawalpindi, and long routes.", icon: MapPinned },
  { title: "Professional service standard", description: "Clear communication from booking to delivery confirmation.", icon: BadgeCheck }
];

export const fleet = [
  {
    name: "Container Trucks",
    capacity: "Commercial cargo capacity",
    use: "Retail goods, cartons, palletized cargo, and intercity transport",
   image: "/images/fleet/Container-truck.png.png"
  },
  {
    name: "Flatbed Trucks",
    capacity: "Heavy goods capacity",
    use: "Machinery, steel, construction material, and oversized goods",
    image: "/images/fleet/Flatbed-truck.png.png"
  },
  {
    name: "Mazda & Cargo Trucks",
    capacity: "House shifting and city cargo",
    use: "Furniture, home goods, office shifting, and local deliveries",
    image: "/images/fleet/Mazda-truck.png.png"
  }
];

export const testimonials = [
  {
    quote:
      "Ubaid Goods Transport handled our Lahore to Karachi cargo with clear updates and careful loading. The service felt professional from start to finish.",
    name: "Ahmed Raza",
    role: "Retail Distributor, Lahore"
  },
  {
    quote:
      "Their house shifting team packed and loaded everything carefully. Booking on WhatsApp was simple and the truck arrived on time.",
    name: "Sana Malik",
    role: "House Shifting Customer"
  },
  {
    quote:
      "For long route delivery and loading services, Ubaid Goods Transport is now our regular logistics partner.",
    name: "Bilal Khan",
    role: "Factory Manager, Multan"
  }
];

export const faqs = [
  {
    question: "What services does Ubaid Goods Transport provide?",
    answer:
      "We provide loading services, house shifting, cargo transport, truck dispatch, goods transport, logistics services, and long route delivery across Pakistan."
  },
  {
    question: "Do you provide transport in Lahore, Karachi, Multan, and Rawalpindi?",
    answer:
      "Yes. We serve Lahore, Karachi, Multan, Rawalpindi, and all major cities and routes across Pakistan."
  },
  {
    question: "Can I book by WhatsApp?",
    answer:
      "Yes. Call or WhatsApp 03234125101 to request a quick quote, book a truck, or ask about loading and house shifting services."
  },
  {
    question: "Do you handle house shifting and loading labor?",
    answer:
      "Yes. We provide labor support for loading and unloading, plus house shifting transport for furniture, appliances, and household goods."
  }
];

export const stats = [
  { value: "24/7", label: "Call & WhatsApp" },
  { value: "5+", label: "Major service regions" },
  { value: "100%", label: "Pakistan coverage" },
  { value: "Fast", label: "Quote response" }
];

export const truckTypes = [
  { label: "Container Truck", icon: Truck },
  { label: "Mazda Truck", icon: Truck },
  { label: "Flatbed Truck", icon: Truck },
  { label: "Cargo Truck", icon: Truck }
];
