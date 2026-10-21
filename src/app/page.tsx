import { CATEGORIES, categoryAnchor, getAllGuides } from "@/lib/guides";

export default function Home() {
  const guides = getAllGuides();
  const featured = guides.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white border-b border-green-100">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 leading-snug">
            Pakistan Ke Sarkari Kaam,
            <br />
            <span className="text-green-700">Ab Asaan Roman Urdu Me</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-600 leading-relaxed">
            Passport, CNIC, driving license, bijli bill, FBR filer, domicile —
            har kaam ka poora tareeqa, zaroori kagzaat aur official fees, aik
            jagah. Koi agent nahi, koi pareshaani nahi.
          </p>
          <a
            href="/guides"
            className="mt-6 inline-block rounded-xl bg-green-700 px-7 py-3 font-semibold text-white hover:bg-green-800"
          >
            Guides Dekhein →
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-xl font-extrabold text-zinc-900">Categories</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
          {CATEGORIES.map((c) => (
            <a
              key={c.name}
              href={`/guides#${categoryAnchor(c.name)}`}
              className="block rounded-2xl border border-zinc-200 bg-white p-4 hover:border-green-500 hover:shadow-md transition"
            >
              <p className="font-bold text-green-800">{c.name}</p>
              <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                {c.blurb}
              </p>
              <p className="mt-2 text-sm font-semibold text-green-700">
                Guides dekhein →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Latest guides */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-zinc-900">Taza Guides</h2>
          <a href="/guides" className="text-sm font-semibold text-green-700 hover:underline">
            Sari dekhein →
          </a>
        </div>
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((g) => (
            <a
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-green-500 hover:shadow-md transition"
            >
              <span className="inline-block rounded-full bg-green-50 text-green-800 text-xs font-bold px-3 py-1">
                {g.category}
              </span>
              <h3 className="mt-3 font-bold text-zinc-900 leading-snug">
                {g.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-3">
                {g.description}
              </p>
              <p className="mt-3 text-xs text-zinc-400">
                {g.readingMinutes} min padhai
              </p>
            </a>
          ))}
        </div>
        {guides.length === 0 && (
          <p className="mt-4 text-zinc-500">
            Guides jald aa rahi hain — pehli guide tayyar ho rahi hai.
          </p>
        )}
      </section>

      {/* Trust strip */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-bold text-zinc-800">✓ Official Sources</p>
            <p className="mt-1 text-zinc-500 leading-relaxed">
              Fees aur process hamesha sarkari websites se verify karke likhe
              jate hain.
            </p>
          </div>
          <div>
            <p className="font-bold text-zinc-800">✓ Asaan Zuban</p>
            <p className="mt-1 text-zinc-500 leading-relaxed">
              Mushkil sarkari alfaz ki jagah seedhi Roman Urdu — har koi samjhe.
            </p>
          </div>
          <div>
            <p className="font-bold text-zinc-800">✓ Mukammal Steps</p>
            <p className="mt-1 text-zinc-500 leading-relaxed">
              Kagzaat se le kar fees aur office tak — poora process aik guide
              me.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
