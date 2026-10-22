import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/SiteNav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bar Linder" },
      { name: "description", content: "Get in touch with Bar Linder, frontend developer." },
      { property: "og:title", content: "Contact — Bar Linder" },
      { property: "og:description", content: "Send a message to start a conversation." },
    ],
  }),
  component: Contact,
});

// Placeholder contact details — replace with real ones.
const EMAIL = "bar.linder@gmail.com";
const channels = [
  { label: "EMAIL", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "GITHUB", value: "github.com/rednil-rab", href: "https://github.com/rednil-rab" },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/barlinder",
    href: "https://linkedin.com/in/barlinder",
  },
];

function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <PageTitle>CONTACT</PageTitle>
      <div className="pixel-box p-6">
        <p className="mb-6">&gt; Want to team up? Pick a channel:</p>
        <ul className="space-y-4">
          {channels.map((c) => (
            <li key={c.label} className="flex flex-wrap gap-4">
              <span className="w-28 font-pixel text-[0.6rem] text-primary">{c.label}</span>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline hover:text-neon-yellow"
              >
                {c.value}
              </a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${EMAIL}`} className="pixel-btn mt-8 inline-block">
          SEND MESSAGE
        </a>
      </div>
    </section>
  );
}
