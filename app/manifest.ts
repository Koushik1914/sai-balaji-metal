import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";
import { DEFAULT_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "SB Metal",
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#F8F9FA",
    theme_color: "#1F1F1F",
    orientation: "portrait-primary",
    categories: ["business", "shopping"],
  };
}
