import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nadia Pramesti Portfolio",
    short_name: "Nadia Portfolio",
    description: "A premium personal portfolio website built with Next.js and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F5",
    theme_color: "#F7F7F5",
    icons: [
      {
        src: "/images/icons/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
