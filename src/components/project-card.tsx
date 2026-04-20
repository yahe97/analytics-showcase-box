import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tools: string[];
  focus: string[];
  link: string;
  accent: "sienna" | "ink" | "sand";
  number: string;
};

export const projects: Project[] = [
  {
    slug: "spotify-election",
    number: "01",
    title: "Spotify Election Songs Dashboard",
    tagline: "Tableau · Data Storytelling · Behavioral Insights",
    description:
      "An exploration of music, audience behavior, and public sentiment through a Spotify-themed election visualization. Designed to surface engagement patterns and prove that data can be both analytical and culturally resonant.",
    tools: ["Tableau", "Spotify API", "Storytelling"],
    focus: [
      "Turning raw data into a clear visual narrative",
      "Highlighting trends through interactive dashboard design",
      "Making data more accessible for broader audiences",
    ],
    link: "#",
    accent: "sienna",
  },
  {
    slug: "national-parks",
    number: "02",
    title: "National Parks Visit Dashboard",
    tagline: "Tableau · Data Visualization · Tourism Analytics",
    description:
      "A study of visitation patterns across U.S. national parks — translating dense public datasets into intuitive, decision-friendly visual tools that reveal seasonality, popularity, and comparative traffic.",
    tools: ["Tableau", "Public Datasets", "EDA"],
    focus: [
      "Exploratory analysis of public visitation data",
      "Interactive dashboard design for trend comparison",
      "Visual storytelling for high-volume, multi-category data",
    ],
    link: "#",
    accent: "ink",
  },
  {
    slug: "tooth-engineers",
    number: "03",
    title: "Tooth Engineers Dashboard",
    tagline: "Product Thinking · Analytics · UX Design",
    description:
      "A dashboard built at the intersection of analytics, product thinking, and user experience — engineered to drive actionable insight in a format that feels practical, not technical.",
    tools: ["Product Design", "Analytics", "UX"],
    focus: [
      "Designing a usable and engaging dashboard experience",
      "Structuring information to support business decisions",
      "Combining analytical thinking with intuitive presentation",
    ],
    link: "#",
    accent: "sand",
  },
];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accentBar =
    project.accent === "sienna"
      ? "bg-accent"
      : project.accent === "ink"
        ? "bg-foreground"
        : "bg-secondary-foreground/40";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-editorial md:p-10"
    >
      <div className={`absolute left-0 top-0 h-1 w-full ${accentBar}`} />
      <div className="flex items-start justify-between gap-6">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          PROJECT — {project.number}
        </span>
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
        >
          Read case <span aria-hidden>→</span>
        </Link>
      </div>

      <h3 className="mt-6 font-display text-2xl leading-tight text-balance md:text-3xl">
        {project.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-accent">{project.tagline}</p>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
