import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bar Linder" },
      { name: "description", content: "About Bar Linder, a frontend-focused full-stack developer who loves React and TypeScript." },
      { property: "og:title", content: "About — Bar Linder" },
      { property: "og:description", content: "Who I am and the skills I bring to the team." },
    ],
  }),
  component: About,
});

// EDIT HERE — swap these paragraphs for your own bio.
const bio = [
  "I'm Bar, a frontend-focused full-stack developer with 5 years of experience building React and TypeScript applications. I enjoy turning complex workflows into intuitive interfaces, improving performance, and keeping codebases maintainable.",
  "I'm passionate about clean code, great UX, and building products that make a real impact.",
];

// EDIT HERE — swap these skill groups (and add/remove categories) for your own stack.
const skills = [
  { group: "FRONTEND", items: ["React, TypeScript, JavaScript, Next.js, Tailwind CSS, Zustand"], color: "text-neon-yellow" },
  { group: "STYLING", items: ["CSS, Responsive Design, Accessibility"], color: "text-neon-green" },
  { group: "BACKEND", items: ["Node.js, Hapi, REST APIs, WebSockets"], color: "text-neon-cyan" },
  { group: "DATA", items: ["PostgreSQL, MongoDB"], color: "text-neon-yellow" },
  { group: "PRACTICES", items: ["Testing, Performance, Refactoring, CI/CD"], color: "text-neon-green" },
] as const;

function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <PageTitle>ABOUT ME</PageTitle>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="pixel-box p-6">
          <h2 className="mb-4 text-xs text-primary">WHO I AM</h2>
          {bio.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
          <p className="text-neon-cyan">{">"} Always learning. Always building.</p>
        </div>
        <div className="pixel-box p-6">
          <h2 className="mb-4 text-xs text-primary">SKILLS</h2>
          <ul className="space-y-4">
            {skills.map(({ group, items, color }) => (
              <li key={group}>
                <div className={`text-sm ${color}`}>{">"} {group}</div>
                <ul className="mt-1 space-y-1 pl-4 text-muted-foreground">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
