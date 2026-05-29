import { Container, Eyebrow, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { Figure } from '@/components/ui/Figure';

const bio = [
  'Jimmy Yong is the Chief Executive Officer of Solunar, leading the company’s strategic direction as a Battery Energy Storage System (BESS) system integrator and clean-energy technology partner for Malaysia and Southeast Asia.',
  'Jimmy holds a background in Engineering, Electronics & Electrical from the University of Hertfordshire, a Master in Marketing from Louisiana State University, and an MBA from HELP University. This combination of engineering, marketing and business management gives him a strong multidisciplinary foundation to lead Solunar in both technical execution and commercial growth.',
  'With his electrical and electronics engineering background, Jimmy understands the technical fundamentals behind power systems, solar integration, energy storage, inverters, PCS, EMS and electrical infrastructure. His business and marketing qualifications further strengthen his ability to position Solunar strategically, develop market opportunities, build partnerships and scale the company in the fast-growing energy storage sector.',
  'As CEO, Jimmy is focused on positioning Solunar not merely as an equipment supplier, but as a trusted BESS integration partner for EPCC contractors, developers, asset owners and commercial and industrial clients. Under his leadership, Solunar supports clients in designing, integrating, commissioning, operating and maintaining safe, reliable and bankable energy storage solutions.',
  'Solunar works with leading technology partners including BYD, GoodWe, EVE and other established energy-storage brands to deliver integrated solutions across commercial, industrial and utility-scale applications.',
];

const education = [
  'Engineering, Electronics & Electrical — University of Hertfordshire',
  'Master in Marketing — Louisiana State University',
  'MBA — HELP University',
];

const commitment =
  'Through Solunar, Jimmy is committed to helping businesses reduce electricity costs, manage maximum demand, strengthen energy resilience, optimise solar usage and accelerate the transition toward smarter clean-energy infrastructure.';

export function Leadership() {
  return (
    <Section tone="mist">
      <Container>
        <Reveal>
          <Eyebrow>Leadership</Eyebrow>
        </Reveal>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Figure
                src="/images/jimmy-yong.jpg"
                alt="Jimmy Yong, Chief Executive Officer of Solunar"
                aspect="1 / 1"
                tone="light"
              />
              <p className="mt-5 font-display text-xl font-semibold text-ink">Jimmy Yong</p>
              <p className="text-sm font-medium text-accent-2">Chief Executive Officer, Solunar</p>
              <ul className="mt-4 flex flex-col gap-2">
                {education.map((item) => (
                  <li key={item} className="text-[0.8rem] leading-snug text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-4">
              {bio.map((paragraph, i) => (
                <p key={i} className="prose-body">
                  {paragraph}
                </p>
              ))}
              <blockquote className="mt-6 rounded-2xl border-l-2 border-accent bg-paper p-6">
                <p className="font-display text-lg font-medium leading-snug tracking-tight text-ink sm:text-xl">
                  “Jimmy’s vision is to make BESS more practical, accessible and commercially viable
                  for businesses and infrastructure owners — energy storage will become a critical
                  infrastructure layer for Malaysia’s future.”
                </p>
              </blockquote>
              <p className="prose-body">
                As Malaysia’s energy market evolves with rising maximum-demand charges, increasing
                solar adoption, grid constraints and the need for energy resilience, that future is
                arriving quickly.
              </p>
              <p className="prose-body">{commitment}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
