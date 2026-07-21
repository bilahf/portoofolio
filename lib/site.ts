import type { Metadata } from "next";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

export const siteConfig = {
  name: `${profile.name} | Portfolio`,
  description: `${profile.name} is a ${profile.title} crafting elegant, performant, and maintainable digital products.`,
  url: "https://example.vercel.app",
  ogImage: "/images/icons/og-cover.svg",
  themeColor: "#F7F7F5",
  email: contact.email,
};

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${profile.shortName}`,
  },
  description: siteConfig.description,
  applicationName: profile.name,
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    "frontend engineer",
    "portfolio",
    "next.js portfolio",
    "typescript portfolio",
    "ui designer",
    "product engineer",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/images/icons/favicon.svg",
    shortcut: "/images/icons/favicon.svg",
    apple: "/images/icons/favicon.svg",
  },
  category: "technology",
};
