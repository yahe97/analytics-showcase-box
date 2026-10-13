import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yajaira Huerta" },
      {
        name: "description",
        content:
          "About Yajaira Huerta: MBA candidate focused on AI & Business Strategy, with experience in financial services, telecommunications, consumer business, and startups.",
      },
      { property: "og:title", content: "About — Yajaira Huerta" },
      {
        property: "og:description",
        content: "MBA candidate at Smith School. Data, AI & business strategy.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
        <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] tracking-tight text-balance md:text-7xl">
          A strategist who thinks in <em className="italic text-accent">data</em>, designs in narrative.
        </h1>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-24 lg:grid-cols-3 lg:px-10 lg:pb-32">
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Currently</p>
              <p className="mt-2 font-display text-xl">MBA Candidate</p>
              <p className="text-sm text-muted-foreground">
                Robert H. Smith School of Business · University of Maryland
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Focus</p>
              <p className="mt-2 text-sm">AI & Business Strategy, marketing intelligence, healthcare innovation, technology commercialization.</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Based in</p>
              <p className="mt-2 text-sm">Lanham, Maryland · Working across the U.S. and Peru</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Education</p>
              <p className="mt-2 text-sm">MBA, AI & Business Strategy — Smith School (May 2026)</p>
              <p className="mt-2 text-sm">MIT MicroMasters, Statistics & Data Science</p>
              <p className="mt-2 text-sm">B.S. Systems Engineering — UNI, Lima</p>
            </div>
          </div>
        </aside>

        <div className="space-y-8 lg:col-span-2">
          <p className="text-lg leading-relaxed text-foreground/90 text-pretty md:text-xl">
            I'm passionate about using <span className="text-accent">data, AI, and business strategy</span> to solve real-world problems. My background spans financial services, telecommunications, consumer business, and startup environments — leading analytics initiatives, building dashboards, supporting go-to-market decisions, and translating insight into action.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Currently, I'm pursuing an MBA focused on AI & Business Strategy, with interests in marketing intelligence, strategic growth, healthcare innovation, and technology commercialization. I believe the strongest decisions live where rigorous analysis meets clear storytelling — and I work to keep both in the same room.
          </p>

          <div className="grid gap-6 pt-6 sm:grid-cols-2">
            {[
              { k: "Industries", v: "Financial Services · Telecom · Consumer · Startups" },
              { k: "Geographies", v: "United States · Peru" },
              { k: "Functions", v: "Analytics · Marketing Intelligence · GTM" },
              { k: "Education", v: "MBA, Smith School · MIT MicroMasters (Statistics & Data Science) · B.S. Systems Engineering" },
            ].map((row) => (
              <div key={row.k} className="border-t border-border pt-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{row.k}</p>
                <p className="mt-2 text-sm">{row.v}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              See selected work →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Experience</p>
          <h2 className="mt-3 font-display text-4xl font-light tracking-tight text-balance md:text-5xl">
            Where the work has happened.
          </h2>
          <div className="mt-12 space-y-px overflow-hidden rounded-3xl border border-border bg-border">
            {[
              { role: "GTM Fellow, CRM & Revenue Operations", org: "BioBuzz · Baltimore, MD", when: "Jun 2025 – Present", note: "HubSpot data architecture, executive GTM dashboards, and a 2.7× newsletter click-rate lift through segmentation." },
              { role: "Digital Marketing Strategy & Content — MBA Intern", org: "Eternus Bio Corp · College Park, MD", when: "Jun 2025 – Present", note: "Digital strategy across 5 platforms, leading 6 team members; KPI reporting with GA4, Meta & YouTube Analytics." },
              { role: "Data Scientist", org: "BBVA · Lima, Peru", when: "Jun 2022 – Jul 2024", note: "Predictive models for digital loan sales (+8%), +20% cross-selling revenue, and A/B-tested ML recommendations." },
              { role: "Digital Data Analyst", org: "Belcorp · Lima, Peru", when: "Jul 2021 – Jun 2022", note: "Behavioral analytics that cut decision time 25%, improved targeting 30%, and reduced manual reporting 50%." },
            ].map((job) => (
              <div key={job.org} className="grid gap-2 bg-card p-8 md:grid-cols-12 md:items-baseline">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:col-span-3">{job.when}</p>
                <div className="md:col-span-9">
                  <p className="font-display text-lg leading-snug">{job.role}</p>
                  <p className="mt-0.5 text-sm text-accent">{job.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{job.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter/>
    </div>
  );
}
