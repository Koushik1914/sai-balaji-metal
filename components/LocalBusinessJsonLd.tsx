import { SITE } from "@/lib/constants";
import { DEFAULT_DESCRIPTION } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

function localBusinessSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#business`,
    name: SITE.name,
    description: DEFAULT_DESCRIPTION,
    url,
    telephone: `+91${SITE.phoneDisplay}`,
    email: SITE.email,
    image: [`${url}/opengraph-image`, `${url}${SITE.heroBackgroundImage}`],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Industrial Area Kushalapuram, Nava Bharat Junction, Srikakulam – 532410",
      addressLocality: "Srikakulam",
      addressRegion: "Andhra Pradesh",
      postalCode: "532410",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Srikakulam District",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "18:30",
    },
    sameAs: [SITE.mapsShortUrl],
    priceRange: "$$",
  };
}

export function LocalBusinessJsonLd() {
  const json = JSON.stringify(localBusinessSchema());
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
