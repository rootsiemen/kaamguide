import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "KaamGuide terms of use — this site provides informational guides about Pakistani government services, is not a government website, and all fees and rules must be verified on official websites.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
        Terms of Use
      </h1>
      <div className="prose-article">
        <p>
          <strong>Last updated: November 13, 2026</strong>
        </p>
        <p>
          Welcome to KaamGuide (igaf.me). These Terms of Use explain the
          conditions that apply when you visit and use this website. By
          accessing or using KaamGuide, you agree to these terms. If you do
          not agree with any part of them, please do not use this website.
        </p>
        <h2>Informational purpose only</h2>
        <p>
          KaamGuide publishes step-by-step guides that explain how common
          Pakistani government services work — for example, how to apply for a
          passport, CNIC, driving licence, domicile, or tax filer status. All
          content on this website is provided for general information and
          guidance only. Reading a guide does not create any official,
          professional, or client relationship between you and KaamGuide, and
          no guide on this site should be treated as a substitute for the
          instructions of the government department responsible for your task.
        </p>
        <h2>Not a government website</h2>
        <p>
          KaamGuide is a privately run, independent information website. It is
          not a government website, and it is not affiliated with, endorsed
          by, or connected to NADRA, the Federal Board of Revenue (FBR), the
          Higher Education Commission (HEC), the Directorate General of
          Passports, any provincial or local government body, or any other
          public institution. We do not process applications, issue documents,
          collect government fees, or act on behalf of any department.
        </p>
        <h2>Accuracy of information</h2>
        <p>
          We make a genuine effort to keep every guide accurate and current.
          Fees, document requirements, and procedures are researched from
          official sources — the relevant department&apos;s website, published
          fee charts, and official notifications — and each guide shows the
          date it was last updated. Despite this care, errors can occur and
          official rules can change without notice. We cannot guarantee that
          every detail on this website is complete, current, or free of error
          at the moment you read it.
        </p>
        <h2>Fees and rules can change</h2>
        <p>
          Government fees, eligibility rules, office timings, and application
          procedures change from time to time. Any fee or figure mentioned in
          a guide was correct, to the best of our knowledge, on the date shown
          in that guide. Before you apply, pay any fee, or travel to an
          office, always confirm the current requirements on the official
          website of the relevant department or at its office.
        </p>
        <h2>External links</h2>
        <p>
          Our guides link to official government websites and, occasionally,
          to other external resources for your convenience. We do not control
          those websites and are not responsible for their content,
          availability, or practices. Visiting an external link is at your own
          discretion, and the terms and privacy policy of that website will
          apply.
        </p>
        <h2>No liability for decisions</h2>
        <p>
          You are responsible for the decisions you make based on information
          found on this website. To the fullest extent permitted by law,
          KaamGuide and its editor accept no liability for any loss, cost, or
          inconvenience arising from reliance on our guides — including a
          missed deadline, a rejected application, or a fee that has changed —
          where the current requirement could have been confirmed with the
          responsible department.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The guides, text, and design published on KaamGuide are our original
          work and are protected by copyright. You may read, share links to,
          and quote short passages of our guides for personal, non-commercial
          use with a clear credit and a link back to the original page. You
          may not republish complete guides, scrape the website in bulk, or
          present our content as your own.
        </p>
        <h2>Changes to these terms</h2>
        <p>
          We may update these Terms of Use from time to time. Any changes will
          be posted on this page, and the &ldquo;Last updated&rdquo; date at
          the top will be revised accordingly. Continuing to use the website
          after a change means you accept the updated terms.
        </p>
        <h2>Contact us</h2>
        <p>
          If you have any questions about these Terms of Use, or if you spot
          information in a guide that needs correction, please reach us
          through our <a href="/contact">contact page</a>.
        </p>
      </div>
    </div>
  );
}
