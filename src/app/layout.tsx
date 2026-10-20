import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KaamGuide — Pakistan Ke Sarkari Kaam, Asaan Roman Urdu Me",
    template: "%s | KaamGuide",
  },
  description:
    "Passport, CNIC, driving license, bijli bill, FBR filer aur domicile — Pakistan ke har sarkari kaam ka mukammal tareeqa, fees aur documents asaan Roman Urdu me.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "KaamGuide — Sarkari Kaam Asaan Roman Urdu Me",
    description:
      "Passport, CNIC, license, bill aur tax — har sarkari kaam ki mukammal guide, official fees aur step-by-step tareeqa.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "ur_PK",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KaamGuide — Pakistan Ke Sarkari Kaam, Asaan Roman Urdu Me",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
    title: "KaamGuide — Sarkari Kaam Asaan Urdu Me",
    description:
      "Passport, CNIC, license, bill aur tax — har sarkari kaam ki mukammal guide, official fees ke saath.",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "ur-PK",
  description:
    "Pakistan ke sarkari kaamon ki Roman Urdu guides: passport, CNIC, driving license, bills, FBR tax aur domicile.",
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Roman Urdu me sarkari kaamon ki guides — official sources se verified fees, documents aur process.",
};

function Header() {
  const links = [
    { href: "/guides", label: "Sari Guides" },
    { href: "/guides/pakistan-passport-banane-ka-tareeqa", label: "Passport" },
    { href: "/about", label: "Hamare Baare Me" },
    { href: "/contact", label: "Rabta" },
  ];
  return (
    <header className="border-b border-zinc-200 bg-white/95 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="KaamGuide logo" className="h-9 w-9 rounded-lg" />
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-green-700">Kaam</span>
            <span className="text-zinc-900">Guide</span>
          </span>
        </a>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-zinc-600 justify-end">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-green-700">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white mt-16">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-zinc-500">
        <p className="font-semibold text-zinc-700 mb-2">KaamGuide</p>
        <p className="max-w-2xl leading-relaxed">
          KaamGuide sirf rehnumai ke liye hai — ye kisi sarkari idaray ki
          website nahi hai. Fees aur rules waqt ke saath badal sakte hain, is
          liye apply karne se pehle hamesha mutaliqa idaray ki official website
          se tasdeeq kar lein.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a href="/guides" className="hover:text-green-700">Sari Guides</a>
          <a href="/about" className="hover:text-green-700">Hamare Baare Me</a>
          <a href="/contact" className="hover:text-green-700">Rabta</a>
        </div>
        <p className="mt-4 text-xs">© 2026 KaamGuide. Jami haqooq mehfooz hain.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ur-PK" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
