import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ProjectCard, projects } from "@/components/project-card";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Yajaira Huerta" },
      {
        name: "description",
        content:
          "Selected dashboards and analytics projects by Yajaira Huerta — Tableau, data storytelling, and product-driven analytics.",
      },
      { property: "og:title", content: "Projects — Yajaira Huerta" },
      {
        property: "og:description",
        content: "Tableau dashboards and analytics work in marketing intelligence and data storytelling.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Projects · 04 Featured</p>
        <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] tracking-tight text-balance md:text-7xl">
          Where analysis meets <em className="italic text-accent">narrative</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty md:text-lg">
          A selection of dashboards and analytics projects spanning behavioral data, public datasets, and product-led design.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
