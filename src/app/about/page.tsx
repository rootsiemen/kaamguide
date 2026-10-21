import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hamare Baare Me",
  description:
    "KaamGuide Pakistan ke sarkari kaamon ki Roman Urdu guides deta hai — official sources se verified fees, documents aur step-by-step process.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
        Hamare Baare Me
      </h1>
      <div className="prose-article">
        <p>
          Pakistan me har saal karodon log passport, CNIC, driving license,
          domicile aur tax filer jasay sarkari kaamon ke liye offices ke
          chakkar lagate hain. Masla ye nahi ke kaam mushkil hai — masla ye hai
          ke sahi maloomat asaan zuban me kahi milti hi nahi. Aadmi daftar
          pohonchta hai, pata chalta hai aik kagaz kam hai, aur poora din zaya
          ho jata hai.
        </p>
        <p>
          <strong>KaamGuide</strong> isi maslay ka hal hai. Yahan har sarkari
          kaam ki mukammal guide Roman Urdu me di jati hai — wo zuban jo
          Pakistan ke aksar log roz boltay aur parhtay hain.
        </p>
        <h2>Kaun likhta hai?</h2>
        <p>
          KaamGuide aik chhoti si team chalati hai jo sarkari kaamon ke
          process ko pehle khud official sources se parhti aur samajhti hai —
          mutaliqa idaray ki website, published fee chart aur notifications —
          phir usi maloomat ko asaan Roman Urdu me guide ki surat me likhti
          hai. Hamara kaam maloomat ko asaan banana hai; sarkari faislay aur
          services sirf mutaliqa idaray ke ikhtiyar me hain.
        </p>
        <h2>Editorial policy: hum maloomat kaise verify karte hain</h2>
        <ul>
          <li>
            <strong>Official sources pehle:</strong> fees, documents aur
            process mutaliqa idaray ki official website se verify karke likhe
            jate hain.
          </li>
          <li>
            <strong>Concrete maloomat:</strong> sirf hawai baten nahi — fees ke
            exact numbers, office ke timings aur step-by-step tareeqa.
          </li>
          <li>
            <strong>Update ki zimmedari:</strong> jab fees ya rules badaltay
            hain, guides ko update kar diya jata hai aur update ki tareekh
            guide pe likh di jati hai.
          </li>
          <li>
            <strong>Koi agent culture nahi:</strong> hamara maqsad hai ke aap
            apna kaam khud, sahi tareeqe se, baghair kisi agent ke kar sakein.
          </li>
          <li>
            <strong>Ghalti ki durustgi:</strong> agar kisi guide me ghalti
            nazar aye to Contact page se humein bata dein — hum official
            source se verify karke guide theek kar dete hain aur update ki
            tareekh bhi badal di jati hai.
          </li>
        </ul>
        <h2>Ahem note</h2>
        <p>
          KaamGuide aik ghair-sarkari maloomati website hai. Hum kisi sarkari
          idaray se mansalik nahi hain aur koi sarkari service faraham nahi
          karte. Tamam fees aur rules akhir me mutaliqa idaray ki official
          website se hi tasdeeq karein.
        </p>
      </div>
    </div>
  );
}
