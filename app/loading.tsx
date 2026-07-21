export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="rounded-[32px] border border-border bg-card px-8 py-10 text-center shadow-soft">
        <div className="mx-auto h-12 w-12 animate-pulse rounded-full bg-primary/20" />
        <p className="mt-5 text-sm font-medium text-foreground">Loading portfolio...</p>
        <p className="mt-2 text-sm text-muted">Preparing a calm, polished experience.</p>
      </div>
    </div>
  );
}
