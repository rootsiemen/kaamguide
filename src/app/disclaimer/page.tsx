import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "KaamGuide disclaimer — KaamGuide is an unofficial information website, not affiliated with NADRA, FBR, HEC or any government body. Information is verified from official sources but must be confirmed on official websites.",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
        Disclaimer
      </h1>
      <div className="prose-article">
        <p>
          <strong>Last updated: November 13, 2026</strong>
        </p>
        <p>
          The information published on KaamGuide (igaf.me) is provided in good
          faith to help readers understand Pakistani government services. By
          using this website, you acknowledge and accept the points set out in
          this disclaimer.
        </p>
        <h2>An unofficial website</h2>
        <p>
          KaamGuide is an independent, privately operated information website.
          It is <strong>not</strong> an official government website, and it is
          not affiliated with, endorsed by, sponsored by, or acting on behalf
          of any government department or agency. This includes, without
          limitation, NADRA, the Federal Board of Revenue (FBR), the Higher
          Education Commission (HEC), the Directorate General of Passports,
          excise and taxation departments, boards of intermediate and
          secondary education, and all provincial and local government bodies
          whose services are described in our guides. Names of departments and
          services are used only to identify the subject of each guide.
        </p>
        <h2>Verify before you act</h2>
        <p>
          Every guide on this website is researched and verified from official
          sources — department websites, published fee charts, and official
          notifications — and shows the date it was last updated. However,
          government fees, forms, eligibility rules, and procedures can change
          at any time, sometimes without public notice. For that reason, the
          information here must always be confirmed on the official website of
          the relevant department, or at its office, before you submit an
          application, pay a fee, or make travel or work arrangements based on
          a guide.
        </p>
        <h2>No professional or legal advice</h2>
        <p>
          Nothing on KaamGuide is legal, tax, financial, or any other form of
          professional advice. Our guides explain published procedures in
          simple language; they do not assess your individual situation. If
          your matter involves a dispute, a court case, a tax assessment, or
          any situation where a wrong step could cause serious loss, please
          consult a qualified professional or the responsible department
          directly.
        </p>
        <h2>Errors and corrections</h2>
        <p>
          We work hard to keep our guides accurate, but mistakes can still
          appear, and we do not warrant that all information on this website
          is complete or error-free. If you find an error — an outdated fee, a
          changed requirement, or a broken step — please tell us through our{" "}
          <a href="/contact">contact page</a>. We check every report against
          the official source and correct the guide, with a revised update
          date, as quickly as we can.
        </p>
        <h2>External websites</h2>
        <p>
          Our guides contain links to official government websites and other
          external resources. Those websites are outside our control, and we
          are not responsible for their content, availability, or accuracy.
          Inclusion of a link does not imply endorsement of anything beyond
          the specific page referenced in the guide.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this disclaimer can be sent through our{" "}
          <a href="/contact">contact page</a>, where you will also find our
          email address.
        </p>
      </div>
    </div>
  );
}
