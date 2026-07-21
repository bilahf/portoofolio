import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import "./globals.css";
import { sharedMetadata, siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem("portfolio-theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var theme = saved || (prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch (error) {}
  })();
`;

export const metadata: Metadata = sharedMetadata;

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background text-foreground antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
