import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[36px] border border-border bg-card p-10 text-center shadow-soft sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">404</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            The page you are looking for does not exist.
          </h1>
          <p className="mt-5 text-base leading-8 text-muted">
            The link may be outdated, or the page may have been moved while the portfolio was being refined.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/">
              <Home className="h-4 w-4" />
              Back Home
            </ButtonLink>
            <Link href="/" className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted transition hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Return to homepage
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
