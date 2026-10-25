import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/SiteNav";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Bar Linder" },
      {
        name: "description",
        content: "Projects by Bar Linder: web apps built with React and TypeScript.",
      },
      { property: "og:title", content: "Projects — Bar Linder" },
      {
        property: "og:description",
        content: "Selected work: web apps built with React and TypeScript.",
      },
    ],
  }),
  component: Projects,
});

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  demo: string | null;
  repo: string;
  /** Image URL, or an imported asset. null shows the "NO SIGNAL" placeholder. */
  screenshot: string | null;
  status: string;
};

// ============ PLACEHOLDER PROJECTS — replace with your real ones ============
// To show a real screenshot, put the file in src/assets and import it:
//   import shot1 from "@/assets/project-1.jpg";
// then use  screenshot: shot1,  below.
const projects: Project[] = [
  {
    title: "Questkeeper",
    blurb:
      "Questkeeper is a browser-based campaign manager for tabletop role-playing games. Keep campaign notes, quests, and NPCs together in one place",
    tags: ["React", "TypeScript"],
    demo: null,
    repo: "https://github.com/rednil-rab/campaign-manager",
    screenshot: null,
    status: "In Progress",
  },
];

function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <PageTitle>PROJECTS</PageTitle>
      <p className="mb-10 text-accent">&gt; SELECT YOUR STAGE:</p>
      <ul className="grid gap-8 md:grid-cols-2">
        {projects.length === 0 && (
          <p className="text-neon-yellow">No projects currently available.</p>
        )}
        {projects.map((p) => (
          <li key={p.title} className="pixel-box flex flex-col p-6">
            <div className="mb-5 flex aspect-video items-center justify-center overflow-hidden border-4 border-border bg-background">
              {p.screenshot ? (
                <img src={p.screenshot} alt={p.title} className="h-full w-full object-cover" />
              ) : (
                <span className="blink font-pixel text-[0.6rem] text-neon-yellow">NO SIGNAL</span>
              )}
            </div>
            <h2 className="text-[0.7rem] text-neon-yellow">{p.title}</h2>
            <p className="mt-2 text-sm text-accent">{p.status}</p>
            <p className="mt-3">{p.blurb}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="border-2 border-border bg-secondary px-2 py-1 text-sm">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="pixel-btn">
                  LIVE DEMO
                </a>
              )}
              <a href={p.repo} target="_blank" rel="noreferrer" className="pixel-btn">
                GITHUB
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
