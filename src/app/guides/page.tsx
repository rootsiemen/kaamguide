import type { Metadata } from "next";
import { CATEGORIES, getAllGuides } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sari Guides — Sarkari Kaam Step-by-Step",
  description:
    "Pakistan ke tamam sarkari kaamon ki guides: passport, CNIC, driving license, bills, FBR filer aur domicile — fees aur documents ke saath.",
  alternates: { canonical: `${SITE_URL}/guides` },
};

export default function GuidesPage() {
  const guides = getAllGuides();
  const byCategory = CATEGORIES.map((c) => ({
    ...c,
    guides: guides.filter((g) => g.category === c.name),
  }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
        Sari Guides
      </h1>
      <p className="mt-2 text-zinc-600">
        Har guide me mukammal process, zaroori kagzaat aur official fees — sab
        kuch step-by-step.
      </p>

      {byCategory.map(
        (c) =>
          c.guides.length > 0 && (
            <section key={c.name} className="mt-10">
              <h2 className="text-xl font-extrabold text-green-800">{c.name}</h2>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {c.guides.map((g) => (
                  <a
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-green-500 hover:shadow-md transition"
                  >
                    <h3 className="font-bold text-zinc-900 leading-snug">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                      {g.description}
                    </p>
                    <p className="mt-3 text-xs text-zinc-400">
                      {g.readingMinutes} min padhai
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ),
      )}

      {guides.length === 0 && (
        <p className="mt-6 text-zinc-500">
          Guides jald aa rahi hain — pehli guide tayyar ho rahi hai.
        </p>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${SITE_NAME} Guides`,
            itemListElement: guides.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: g.title,
              url: `${SITE_URL}/guides/${g.slug}`,
            })),
          }),
        }}
      />
    </div>
  );
}
