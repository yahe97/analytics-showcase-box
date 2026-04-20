import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background font-display text-sm">
            Y
          </span>
          <span className="font-display text-base tracking-tight">
            Yajaira <span className="text-muted-foreground">Huerta</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link to="/" activeOptions={{ exact: true }} className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Home
          </Link>
          <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            About
          </Link>
          <Link to="/projects" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Projects
          </Link>
          <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Contact
          </Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Let's talk
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-tight">Yajaira Huerta</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            MBA Candidate at the Robert H. Smith School of Business. Marketing intelligence, data & AI strategy.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</p>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</p>
          <ul className="space-y-2">
            <li><a href="mailto:yhuertae@umd.edu" className="hover:text-accent">yhuertae@umd.edu</a></li>
            <li><a href="#" className="hover:text-accent">LinkedIn →</a></li>
            <li><a href="#" className="hover:text-accent">Tableau Public →</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs text-muted-foreground lg:px-10">
          <span>© {new Date().getFullYear()} Yajaira Huerta. All rights reserved.</span>
          <span className="font-mono">v1.0 · est. 2026</span>
        </div>
      </div>
    </footer>
  );
}
