import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/resume", label: "RESUME" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function SiteNav() {
  return (
    <header className="border-b-4 border-border bg-secondary">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="font-pixel text-xs text-neon-yellow">
          BAR.EXE
        </Link>
        <ul className="flex flex-wrap gap-4 font-pixel text-[0.6rem]">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                className="text-foreground hover:text-accent"
                activeProps={{ className: "text-primary" }}
              >
                {({ isActive }) => (
                  <>
                    {isActive ? "> " : ""}
                    {l.label}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function PageTitle({ children }: { children: string }) {
  return <h1 className="glow-text mb-10 text-xl text-neon-yellow md:text-2xl">{children}</h1>;
}
