import { CATEGORIES, categoryAnchor, getAllGuides } from "@/lib/guides";

const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: "KaamGuide kya hai aur ye kis ke liye hai?",
    a: "KaamGuide ek free guidance website hai jahan Pakistan ke sarkari kaamon — passport, CNIC, driving license, domicile waghera — ka poora tareeqa asaan Roman Urdu me diya jata hai, takay har banda agent ke baghair khud apna kaam kar sake.",
  },
  {
    q: "Kya KaamGuide ki tamam guides bilkul free hain?",
    a: "Ji haan, KaamGuide ki tamam guides bilkul free hain. Koi registration, koi fees aur koi subscription nahi hai. Aap kisi bhi waqt website par aa kar apne kaam ki guide parh sakte hain aur us ke steps follow kar sakte hain.",
  },
  {
    q: "Guide me likhi fees aur process sahi hai ya nahi, kese yaqeen karoon?",
    a: "Har guide official sarkari sources se verify karke likhi jati hai aur guide ke akhir me official website ka hawala bhi diya jata hai. Phir bhi fees waqt ke sath badal sakti hai, is liye apply karne se pehle mutaliqa sarkari website par ek dafa confirm kar lein.",
  },
  {
    q: "Kya sarkari kaam ke liye agent rakhna zaroori hai?",
    a: "Nahi, aksar sarkari kaam aap khud kar sakte hain. Passport, CNIC, domicile aur character certificate jese kaamon ka process seedha hai — sahi kagzaat aur steps maloom hon to agent ki fees bach jati hai. Hamari guides isi liye step-by-step banayi gayi hain.",
  },
  {
    q: "Passport ya CNIC banwane ka pehla qadam kya hai?",
    a: "Pehla qadam zaroori kagzaat tayyar karna hai. Passport ke liye asal CNIC aur pichla passport (agar ho), aur CNIC ke liye waliden ke CNIC ki copies chahiye. Poori kagzaat ki list aur fees hamari mutaliqa guides me step-by-step di gayi hai.",
  },
  {
    q: "Agar mera kaam KaamGuide par mojood nahi hai to kya karoon?",
    a: "Aap Contact page ke zariye hamein apna kaam bata sakte hain. Jo kaam sab se zyada manga jata hai, us ki guide sab se pehle tayyar ki jati hai. Is ke ilawa Guides page par categories ke hisab se tamam mojood guides dekhi ja sakti hain.",
  },
];

const OFFICIAL_LINKS: { name: string; url: string; note: string }[] = [
  {
    name: "NADRA",
    url: "https://www.nadra.gov.pk",
    note: "CNIC, B-Form aur family registration",
  },
  {
    name: "FBR",
    url: "https://www.fbr.gov.pk",
    note: "Tax aur filer status check karna",
  },
  {
    name: "HEC",
    url: "https://www.hec.gov.pk",
    note: "Degree attestation aur verification",
  },
  {
    name: "Punjab Land Records Authority",
    url: "https://www.punjab-zameen.gov.pk",
    note: "Fard-e-malkiat aur zameen ka record",
  },
  {
    name: "Excise and Taxation Punjab",
    url: "https://excise.punjab.gov.pk",
    note: "Gaari registration aur token tax",
  },
];

export default function Home() {
  const guides = getAllGuides();
  const featured = guides.slice(0, 6);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
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

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="text-xl font-extrabold text-zinc-900">
          Guide Use Karne Ka Tareeqa
        </h2>
        <ol className="mt-4 list-decimal list-inside space-y-2 text-zinc-600 leading-relaxed">
          <li>
            Apna kaam <a href="/guides" className="font-semibold text-green-700 hover:underline">Guides page</a> ya
            upar di gayi categories me talash karein.
          </li>
          <li>
            Guide me di gayi kagzaat ki list ke hisab se apne documents tayyar
            karein.
          </li>
          <li>
            Steps ko tartib se follow karein — online apply ho ya office
            visit, fees aur timing guide me di gayi hai.
          </li>
          <li>
            Receipt aur tracking number sambhal kar rakhein, takay status
            asani se check ho sake.
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-200 bg-green-50/40">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-xl font-extrabold text-zinc-900">
            Aksar Poche Jane Wale Sawal
          </h2>
          <div className="mt-6 space-y-6">
            {HOME_FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="font-bold text-zinc-900 leading-snug">{f.q}</h3>
                <p className="mt-2 text-zinc-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official links */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-xl font-extrabold text-zinc-900">
          Official Sarkari Websites
        </h2>
        <p className="mt-2 text-zinc-600 leading-relaxed">
          Fees aur process ki tasdeeq ke liye mutaliqa sarkari website bhi
          dekhein — ye un idaron ki official websites hain jin ke kaamon ki
          guides KaamGuide par mojood hain:
        </p>
        <ul className="mt-4 space-y-2">
          {OFFICIAL_LINKS.map((l) => (
            <li key={l.url} className="text-zinc-600">
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-700 hover:underline"
              >
                {l.name}
              </a>{" "}
              — {l.note}
            </li>
          ))}
        </ul>
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
