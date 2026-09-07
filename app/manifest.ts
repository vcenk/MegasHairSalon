import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: BUSINESS.shortName,
    description: BUSINESS.longTagline,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f4ee",
    theme_color: "#f8f4ee",
  };
}
