import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/80 py-8">
      <Container className="flex flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
        <p>{new Date().getFullYear()} {profile.name}. Built with care using Next.js and TypeScript.</p>
        <p>Designed to be easy to maintain, customize, and deploy on Vercel.</p>
      </Container>
    </footer>
  );
}
