import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Yajaira Huerta" },
      {
        name: "description",
        content:
          "Get in touch with Yajaira Huerta about opportunities in marketing intelligence, AI, strategy, or analytics.",
      },
      { property: "og:title", content: "Contact — Yajaira Huerta" },
      { property: "og:description", content: "Let's connect on opportunities in data, AI, and strategy." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email", value: "yhuertae@umd.edu", href: "mailto:yhuertae@umd.edu" },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/yajairahuertae/" },
  { label: "Tableau Public", value: "View dashboards", href: "https://public.tableau.com/app/profile/yajaira.huerta6740" },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
        <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] tracking-tight text-balance md:text-7xl">
          Let's <em className="italic text-accent">connect</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty md:text-lg">
          If you're interested in discussing opportunities in marketing intelligence, strategy, AI, or analytics — I'd love to hear from you.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex flex-col justify-between gap-10 bg-card p-8 transition-colors hover:bg-foreground hover:text-background"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/60">
                {c.label}
              </p>
              <div className="flex items-end justify-between">
                <p className="font-display text-2xl leading-tight">{c.value}</p>
                <span aria-hidden className="text-xl transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
            const body = encodeURIComponent((form.elements.namedItem("message") as HTMLTextAreaElement).value);
            window.location.href = `mailto:yhuertae@umd.edu?subject=${subject}&body=${body}`;
          }}
          className="mt-14 grid gap-6 rounded-3xl border border-border bg-card p-8 md:p-12"
        >
          <p className="font-display text-2xl">Send a quick note</p>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name</span>
              <input
                name="name"
                required
                className="mt-2 w-full border-b border-border bg-transparent py-2 text-base outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</span>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full border-b border-border bg-transparent py-2 text-base outline-none transition-colors focus:border-accent"
              />
            </label>
          </div>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full border-b border-border bg-transparent py-2 text-base outline-none transition-colors focus:border-accent"
            />
          </label>
          <div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Send message →
            </button>
          </div>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
