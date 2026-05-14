export const SITE = {
  name: "Sai Balaji Metal Industries",
  tagline: "Trusted Steel & Hardware Solutions",
  est: "2021",
  address:
    "Industrial Area Kushalapuram, Nava Bharat Junction, Srikakulam – 532410, Andhra Pradesh",
  phoneDisplay: "7989054079",
  phoneTel: "tel:7989054079",
  whatsappDisplay: "85009 38620",
  whatsappDigits: "918500938620",
  email: "vgovindarao7t@gmail.com",
  timings: "Monday – Saturday, 8:30 AM – 6:30 PM",
  mapsShortUrl: "https://maps.app.goo.gl/Kg9sU5LGBTEicrU36",
  /** Google Maps embed-friendly query (no API key). */
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Industrial+Area+Kushalapuram%2C+Nava+Bharat+Junction%2C+Srikakulam+532410%2C+Andhra+Pradesh%2C+India&output=embed",
  /** Hero background (SVG placeholder — replace with photo WebP when available). */
  heroBackgroundImage: "/images/hero/hero-industrial.png",
} as const;

export function waUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappDigits}?text=${encoded}`;
}

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const WHATSAPP_DEFAULT =
  "Hello, I'm interested in your products.";

export const BRANDS = [
  "Jindal Steel & Power",
  "JSW Steel",
  "Tata Steel",
] as const;

export const ABOUT = {
  label: "ABOUT US",
  heading: "Reliable Steel & Hardware Since 2021",
  body: `Sai Balaji Metal Industries is a trusted supplier of steel and hardware materials in Srikakulam. We serve builders, fabricators, contractors, and homeowners with quality products from top brands like Jindal, JSW, and Tata Steel. Our commitment is to deliver durable, industrial-grade materials with dependable service.`,
} as const;

export const STATS = [
  { value: "3+", label: "Years of Experience" },
  { value: "3", label: "Trusted Brands" },
  { value: "6", label: "Product Categories" },
  { value: "Mon–Sat", label: "Availability" },
] as const;

export type ProductItem = {
  id: string;
  name: string;
  description: string;
  whatsappMessage: string;
  icon: "pipe" | "droplets" | "layers" | "fence" | "sparkles" | "wrench";
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "steel-pipes",
    name: "Steel Pipes",
    description:
      "High-strength steel pipes for industrial, residential, and fabrication use.",
    whatsappMessage: "I'm interested in Steel Pipes.",
    icon: "pipe",
  },
  {
    id: "gp-pipes",
    name: "GP Pipes",
    description:
      "Galvanized pipes offering excellent durability for construction and fabrication.",
    whatsappMessage: "I'm interested in GP Pipes.",
    icon: "droplets",
  },
  {
    id: "roofing-sheets",
    name: "Roofing Sheets",
    description:
      "JSW and branded roofing sheets for strong, long-lasting roof solutions.",
    whatsappMessage: "I'm interested in Roofing Sheets.",
    icon: "layers",
  },
  {
    id: "gate-materials",
    name: "Gate Materials",
    description:
      "Complete hardware and materials required for gate fabrication and metal works.",
    whatsappMessage: "I'm interested in Gate Materials.",
    icon: "fence",
  },
  {
    id: "peacock-designs",
    name: "Peacock Designs",
    description:
      "Decorative metal peacock panels and design accessories for modern gates.",
    whatsappMessage: "I'm interested in Peacock Designs.",
    icon: "sparkles",
  },
  {
    id: "fabrication-materials",
    name: "Fabrication Materials",
    description:
      "Angles, rods, welding accessories, and other fabrication essentials.",
    whatsappMessage: "I'm interested in Fabrication Materials.",
    icon: "wrench",
  },
];

export const WHY_US = [
  {
    title: "Industrial Grade Products",
    description: "Only genuine materials from verified sources",
    emoji: "🏭",
  },
  {
    title: "Trusted Brands",
    description: "Jindal, JSW, and Tata Steel certified products",
    emoji: "🏆",
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates without compromising quality",
    emoji: "💰",
  },
  {
    title: "Wide Product Range",
    description: "Everything needed for fabrication under one roof",
    emoji: "📦",
  },
  {
    title: "Reliable Service",
    description: "Dependable and consistent support for every customer",
    emoji: "🤝",
  },
  {
    title: "Local Availability",
    description: "Conveniently located in Srikakulam for fast access",
    emoji: "📍",
  },
] as const;
export const GALLERY_ITEMS = [
  {
    id: "1",
    label: "Steel Pipes Storage",
    image: "/images/gallery/steel-pipes-storage.webp",
    tall: true,
  },
  {
    id: "2",
    label: "GP Pipes",
    image: "/images/gallery/gp-pipes-display.webp",
    tall: false,
  },
  {
    id: "3",
    label: "Roofing Sheets",
    image: "/images/gallery/roofing-sheets-stack.webp",
    tall: true,
  },
  {
    id: "4",
    label: "Gate Fabrication",
    image: "/images/gallery/gate-fabrication-work.webp",
    tall: false,
  },
  {
    id: "5",
    label: "Peacock Design Work",
    image: "/images/gallery/peacock-gate-design.webp",
    tall: true,
  },
  {
    id: "6",
    label: "Shop Interior",
    image: "/images/gallery/shop-interior-srikakulam.webp",
    tall: false,
  },
  {
    id: "7",
    label: "Material Stacks",
    image: "/images/gallery/material-stacks-yard.webp",
    tall: false,
  },
  {
    id: "8",
    label: "Fabrication Accessories",
    image: "/images/gallery/fabrication-accessories.webp",
    tall: true,
  },
] as const;