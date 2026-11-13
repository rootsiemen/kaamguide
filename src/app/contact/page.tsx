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
          Hum se rabta karne ka sab se asan aur tez tareeqa email hai. Apna
          sawal, sifarish ya nishandehi is email address par bhejein:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:neilsonsmarry@gmail.com">
            neilsonsmarry@gmail.com
          </a>
        </p>
        <p>Hum aam taur par in mozuaat par email wasool karte hain:</p>
        <ul>
          <li>
            Guide ki correction ya fee update ki maloomat
          </li>
          <li>Nayi guide ki sifarish</li>
          <li>Aam sawalat aur mashwara</li>
        </ul>
        <h2>Jawab kab milega?</h2>
        <p>
          Hum har email parhte hain aur aam taur par{" "}
          <strong>2 se 3 working days</strong> ke andar jawab dene ki poori
          koshish karte hain. Guide ki correction ya fee update wali emails ko
          sab se pehle tarjeeh di jati hai, kyunke un se baqi tamam readers ko
          bhi faida hota hai. Agar aap ke sawal ka jawab kisi mojooda guide me
          pehle se diya gaya hai, to hum aap ko us guide ka link bhej dete
          hain takay aap ko intezar na karna pare.
        </p>
        <h2>Email me ye maloomat shamil karein</h2>
        <ul>
          <li>
            Mutaliqa guide ka naam ya us ka link, takay hum foran sahi page
            tak pohonch saken
          </li>
          <li>
            Ghalti ya tabdeeli ki wazeh tafseel — masalan purani fee kya thi
            aur nayi fee kya hai
          </li>
          <li>
            Agar mumkin ho to official website ya notification ka hawala,
            takay tasdeeq me asani ho
          </li>
        </ul>
        <h2>Kya na bhejein</h2>
        <p>
          Meherbani karke email me apni zaati dastavezaat kabhi na bhejein —
          CNIC ki copy, passport ki scan copy, bank statement ya aisi koi bhi
          zaati maloomat humein darkar nahi hoti. KaamGuide kabhi bhi email
          par personal documents nahi mangta. Agar koi shakhs KaamGuide ka
          naam istemal karke aap se documents ya fees mange, to wo fraud hai —
          usay jawab na dein aur isi email par humein ittila dein.
        </p>
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
