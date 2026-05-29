import { Container } from '@/components/ui/primitives';

// Temporary scaffold homepage — replaced with the full 10-section build in a later phase.
export default function HomePage() {
  return (
    <section className="bg-ink text-paper">
      <Container className="flex min-h-[70vh] flex-col justify-center pb-20 pt-36">
        <p className="eyebrow">Scaffold check</p>
        <h1 className="mt-4 font-display text-display font-semibold">Solunar Energy</h1>
        <p className="mt-5 max-w-prose text-lg text-paper/70">
          Foundation is up. The full homepage and all 21 routes are built in subsequent phases.
        </p>
      </Container>
    </section>
  );
}
