import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/SiteNav";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Bar Linder" },
      { name: "description", content: "Bar Linder's experience, skills and education as a frontend developer." },
      { property: "og:title", content: "Resume — Bar Linder" },
      { property: "og:description", content: "Experience, skills and education." },
    ],
  }),
  component: Resume,
});

// Sample entries — replace with real experience.
const jobs = [
  { level: "LVL 3", role: "Frontend Developer", company: "Company Name", years: "2023 — Now", text: "Building React & TypeScript features for a large web app." },
  { level: "LVL 2", role: "Junior Frontend Developer", company: "Company Name", years: "2021 — 2023", text: "Built reusable UI components and improved page performance." },
  { level: "LVL 1", role: "Education", company: "School / Bootcamp", years: "2020 — 2021", text: "Studied web development fundamentals." },
];

const skills = ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Next.js", "Git", "Jest", "Figma"];

function Resume() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <PageTitle>RESUME</PageTitle>
      <h2 className="mb-6 text-xs text-accent">QUEST LOG</h2>
      <ol className="space-y-6">
        {jobs.map((j) => (
          <li key={j.role + j.years} className="pixel-box p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-[0.7rem] text-neon-yellow">{j.level} · {j.role}</h3>
              <span className="text-muted-foreground">{j.years}</span>
            </div>
            <p className="mt-2 text-accent">{j.company}</p>
            <p className="mt-2">{j.text}</p>
          </li>
        ))}
      </ol>
      <h2 className="mb-6 mt-12 text-xs text-accent">INVENTORY</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <li key={s} className="border-2 border-border bg-secondary px-3 py-1">{s}</li>
        ))}
      </ul>
    </section>
  );
}
