const links = [
  {
    category: "Development",
    items: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Vercel", url: "https://vercel.com" },
      { name: "Next.js", url: "https://nextjs.org" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com" },
      { name: "npm", url: "https://npmjs.com" },
      { name: "MDN", url: "https://developer.mozilla.org" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Figma", url: "https://figma.com" },
      { name: "Notion", url: "https://notion.so" },
      { name: "Linear", url: "https://linear.app" },
    ],
  },
  {
    category: "News",
    items: [
      { name: "Hacker News", url: "https://news.ycombinator.com" },
      { name: "The Verge", url: "https://theverge.com" },
      { name: "Reddit", url: "https://reddit.com" },
    ],
  },
];

function faviconUrl(url: string) {
  const { hostname } = new URL(url);
  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
}

export default function Home() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-12">
        {links.map((section) => (
          <section key={section.category}>
            <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              {section.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {section.items.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-[88px] flex-col items-center gap-2.5 rounded-xl bg-zinc-900 p-3.5 transition-colors hover:bg-zinc-800"
                >
                  <img
                    src={faviconUrl(link.url)}
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-md"
                  />
                  <span className="w-full truncate text-center text-[11px] leading-tight text-zinc-400 transition-colors group-hover:text-zinc-200">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
