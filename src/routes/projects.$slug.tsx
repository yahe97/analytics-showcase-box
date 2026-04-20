import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/components/project-card";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Yajaira Huerta` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.description },
        ]
      : [{ title: "Project — Yajaira Huerta" }],
  }),
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="font-mono text-xs tracking-widest text-muted-foreground">404</p>
        <h1 className="mt-4 font-display text-5xl">Project not found</h1>
        <Link to="/projects" className="mt-8 inline-flex text-sm text-accent hover:underline">
          ← Back to all projects
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-foreground px-5 py-3 text-sm text-background">
          Try again
        </button>
      </div>
      <SiteFooter />
    </div>
  ),
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
        <Link to="/projects" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent">
          ← All projects
        </Link>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Project — {project.number}
        </p>
        <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] tracking-tight text-balance md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base font-medium text-muted-foreground">{project.tagline}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-14 space-y-8 text-lg leading-relaxed text-foreground/90 text-pretty">
          <p>{project.description}</p>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-card p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">What I focused on</p>
          <ul className="mt-6 space-y-4">
            {project.focus.map((f) => (
              <li key={f} className="flex items-start gap-4">
                <span className="mt-2 inline-block h-1.5 w-6 shrink-0 bg-accent" />
                <span className="text-base text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            View live project →
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground"
          >
            Discuss this project
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
