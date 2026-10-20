import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rabta Karein",
  description:
    "KaamGuide se rabta karein — guide me ghalti ki nishandehi, nayi guide ki sifarish ya koi sawal.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
        Rabta Karein
      </h1>
      <div className="prose-article">
        <p>
          Kisi guide me ghalti nazar aye, fee update ho gayi ho, ya aap kisi
          naye sarkari kaam ki guide chahte hain — humein zaroor batayein. Aap
          ki nishandehi se hi guides behtar banti hain.
        </p>
        <h2>Email</h2>
        <p>
          Hum se email ke zariye rabta karein:
        </p>
        <ul>
          <li>
            Guide ki correction ya fee update ki maloomat
          </li>
          <li>Nayi guide ki sifarish</li>
          <li>Aam sawalat aur mashwara</li>
        </ul>
        <p>
          <strong>Note:</strong> Hum kisi qisam ki sarkari application process
          nahi karte aur na hi kisi fard ki personal maloomat (CNIC number,
          passport number waghera) email par mangtay hain. Apni personal
          maloomat kabhi kisi ke saath share na karein. Sarkari kaamon ke liye
          hamesha mutaliqa idaray ke official daftar ya website hi istemal
          karein.
        </p>
      </div>
    </div>
  );
}
