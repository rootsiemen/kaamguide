import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGuides, getAllSlugs, getGuide } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const url = `${SITE_URL}/guides/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: guide.date,
      modifiedTime: guide.date,
      images: [{ url: `/images/${guide.slug}.jpg`, width: 1200, height: 675, alt: guide.title }],
    },
    twitter: {
      card: "summary_large_image",
      images: [`/images/${guide.slug}.jpg`],
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${SITE_URL}/guides/${guide.slug}`;
  const others = getAllGuides()
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.date,
    inLanguage: "ur-PK",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${SITE_URL}/guides`,
      },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };


  const faqLd = guide.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-semibold text-green-700">
          <a href="/guides" className="hover:underline">
            ← Sari Guides
          </a>
        </p>
        <span className="mt-4 inline-block rounded-full bg-green-50 text-green-800 text-xs font-bold px-3 py-1">
          {guide.category}
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 leading-snug">
          {guide.title}
        </h1>
        <p className="mt-3 text-zinc-600 leading-relaxed">{guide.description}</p>
        <p className="mt-3 text-sm text-zinc-500">
          Akhri update:{" "}
          {new Date(guide.date + "T00:00:00").toLocaleDateString("ur-PK", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · {guide.readingMinutes} min padhai · KaamGuide
        </p>
        <img
          src={`/images/${guide.slug}.jpg`}
          alt={guide.title}
          className="mt-6 w-full rounded-2xl border border-zinc-200"
          width={1200}
          height={675}
        />
        <div
          className="prose-article mt-4"
          dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
        />

        <div className="mt-10 rounded-2xl bg-green-50 border border-green-200 p-6">
          <p className="font-bold text-green-900">Fees ki tasdeeq karein</p>
          <p className="mt-1 text-sm text-green-800 leading-relaxed">
            Sarkari fees aur rules badal sakte hain. Apply karne se pehle
            mutaliqa idaray ki official website zaroor check kar lein — guide
            me official sources ke links diye gaye hain.
          </p>
        </div>

        {others.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-extrabold text-zinc-900">
              Mazeed Guides
            </h2>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              {others.map((g) => (
                <a
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 hover:border-green-500 transition"
                >
                  <span className="text-xs font-bold text-green-700">
                    {g.category}
                  </span>
                  <p className="mt-1 font-bold text-sm text-zinc-900 leading-snug">
                    {g.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
