import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-abstract.jpg";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ProjectCard, projects } from "@/components/project-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yajaira Huerta — Marketing Intelligence & Data Strategy" },
      {
        name: "description",
        content:
          "MBA candidate translating data, AI, and business strategy into measurable growth across startups and multinationals.",
      },
      { property: "og:title", content: "Yajaira Huerta — Portfolio" },
      {
        property: "og:description",
        content: "MBA · Marketing Intelligence · Data & AI Strategy.",
      },
    ],
  }),
  component: HomePage,
});

const marqueeItems = [
  "Marketing Intelligence",
  "Data Storytelling",
  "Go-to-Market Strategy",
  "AI & Business Strategy",
  "Customer Insights",
  "Growth Analytics",
  "Tableau",
  "Python · SQL · R",
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-32 lg:pt-24">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Portfolio · 2026 Edition
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-5xl font-light leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]"
            >
              Translating <em className="italic text-accent">data</em> into
              <br /> business <em className="italic">growth</em>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg"
            >
              I'm <span className="text-foreground">Yajaira Huerta</span>, an MBA candidate at the University of Maryland's Robert H. Smith School of Business — working at the intersection of marketing intelligence, analytics, and AI strategy across startups and multinationals in the U.S. and Peru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Explore Projects <span aria-hidden>↓</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Contact me
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-6 py-3 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                View résumé →
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-editorial grain">
              <img
                src={heroImage}
                alt="Editorial abstract composition representing data and growth"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-editorial md:block">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Now</p>
              <p className="mt-1 font-display text-lg leading-tight">
                MBA · AI & Business Strategy
              </p>
              <p className="text-xs text-muted-foreground">Smith School · Class of 2026</p>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 bg-secondary/40 py-5">
          <div className="flex gap-12 overflow-hidden whitespace-nowrap">
            <div className="marquee-track flex shrink-0 gap-12 pl-12">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="flex items-center gap-12 font-display text-2xl text-foreground/70">
                  {item}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3 lg:px-10">
          {[
            { k: "5+", v: "years across analytics, marketing & strategy" },
            { k: "2", v: "countries — U.S. & Peru, startup to enterprise" },
            { k: "∞", v: "curiosity for AI, data & customer behavior" },
          ].map((s) => (
            <div key={s.k} className="border-l-2 border-accent pl-6">
              <p className="font-display text-5xl font-light tracking-tight">{s.k}</p>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-light tracking-tight md:text-6xl">
              Featured projects
            </h2>
          </div>
          <Link to="/projects" className="hidden text-sm text-muted-foreground hover:text-accent md:inline-flex">
            All projects →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Experience</p>
              <h2 className="mt-3 font-display text-4xl font-light tracking-tight md:text-5xl text-balance">
                Building where strategy meets data.
              </h2>
            </div>
            <ul className="lg:col-span-8 lg:divide-y lg:divide-border">
              {[
                "Built cross-platform marketing dashboards and AI-driven insight tools in a startup environment.",
                "Developed predictive models and business analytics solutions for revenue growth in financial services.",
                "Supported business strategy through customer segmentation, channel optimization, and digital analytics.",
                "Led cross-functional initiatives across the U.S. and Peru in enterprise and startup settings.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-6 border-b border-border py-6 lg:border-b-0 lg:py-8">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <p className="text-base leading-relaxed text-foreground/90 text-pretty md:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Toolkit</p>
        <h2 className="mt-3 font-display text-4xl font-light tracking-tight md:text-6xl">Skills</h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Business & Strategy",
              items: ["Marketing Intelligence", "Go-to-Market Strategy", "Customer Insights", "Business Analytics", "Growth Strategy"],
            },
            {
              title: "Analytics & Visualization",
              items: ["Tableau", "Power BI", "Excel", "Looker Studio", "Data Storytelling"],
            },
            {
              title: "Technical",
              items: ["Python", "R", "SQL", "Google Analytics", "Redshift", "GCP", "Hadoop"],
            },
            {
              title: "Leadership",
              items: ["Cross-functional collaboration", "Stakeholder communication", "Board presentations", "Team coordination"],
            },
          ].map((group) => (
            <div key={group.title} className="bg-card p-8">
              <p className="font-display text-lg">{group.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {group.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-20 text-background md:px-16 md:py-28">
          <div className="absolute inset-0 bg-gradient-accent opacity-20" />
          <div className="relative max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60">Let's connect</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight text-balance md:text-6xl">
              Have a problem worth solving with data?
            </h2>
            <p className="mt-6 max-w-xl text-base text-background/70">
              I'm open to roles and conversations in marketing intelligence, AI strategy, growth, and analytics.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                Get in touch →
              </Link>
              <a
                href="mailto:yhuertae@umd.edu"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background hover:bg-background/10"
              >
                yhuertae@umd.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
