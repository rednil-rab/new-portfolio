import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bar Linder" },
      { name: "description", content: "About Bar Linder, a frontend developer who loves React and TypeScript." },
      { property: "og:title", content: "About — Bar Linder" },
      { property: "og:description", content: "Who I am and the skills I bring to the team." },
    ],
  }),
  component: About,
});

const stats = [
  ["REACT", 95], ["TYPESCRIPT", 90], ["CSS / TAILWIND", 88], ["TESTING", 75], ["ACCESSIBILITY", 80],
] as const;

function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <PageTitle>ABOUT ME</PageTitle>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="pixel-box p-6">
          <h2 className="mb-4 text-xs text-primary">CHARACTER BIO</h2>
          <p>
            I'm Bar, a frontend developer who builds fast, accessible and delightful interfaces
            with React and TypeScript. I care about clean code, smooth UX and the small details
            that make a product feel right.
          </p>
        </div>
        <div className="pixel-box p-6">
          <h2 className="mb-4 text-xs text-primary">STATS</h2>
          <ul className="space-y-3">
            {stats.map(([name, value]) => (
              <li key={name}>
                <div className="flex justify-between"><span>{name}</span><span className="text-neon-yellow">{value}</span></div>
                <div className="h-4 border-2 border-border bg-background">
                  <div className="h-full bg-neon-green" style={{ width: `${value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
