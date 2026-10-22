import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bar Linder — Frontend Developer" },
      { name: "description", content: "Bar Linder, frontend developer specializing in React & TypeScript." },
      { property: "og:title", content: "Bar Linder — Frontend Developer" },
      { property: "og:description", content: "Frontend developer specializing in React & TypeScript." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-5xl flex-col items-center justify-center px-4 text-center">
      <p className="mb-6 font-pixel text-[0.65rem] text-neon-green">PLAYER 1 READY</p>
      <h1 className="glow-text text-3xl text-foreground md:text-5xl">BAR LINDER</h1>
      <p className="mt-8 text-2xl text-accent md:text-3xl">
        Frontend Developer | React &amp; TypeScript<span className="blink">_</span>
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <Link to="/resume" className="pixel-btn">VIEW RESUME</Link>
        <Link to="/contact" className="pixel-btn">CONTACT ME</Link>
      </div>
      <p className="blink mt-16 font-pixel text-[0.6rem] text-neon-yellow">INSERT COIN TO CONTINUE</p>
    </section>
  );
}
