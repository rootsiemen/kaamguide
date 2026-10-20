import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "KaamGuide privacy policy — what information we collect, how cookies and Google AdSense advertising work on this site, and how to contact us.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
        Privacy Policy
      </h1>
      <div className="prose-article">
        <p>
          <strong>Last updated: October 20, 2026</strong>
        </p>
        <p>
          This Privacy Policy explains how KaamGuide (igaf.me) handles
          information when you visit this website. KaamGuide is an
          informational website that publishes step-by-step guides about
          Pakistani government services in Roman Urdu. By using this website,
          you agree to the practices described below.
        </p>
        <h2>Information we collect</h2>
        <p>
          KaamGuide does not offer user accounts, sign-ups, or logins, and we
          do not ask visitors for personal information. We never ask for your
          name, CNIC number, passport number, or any other personal document
          or detail — please never send such information to us or enter it
          anywhere on this site.
        </p>
        <p>
          Like most websites, our hosting provider may automatically record
          standard technical log data when you visit, such as your IP address,
          browser type, device information, the pages you view, and the date
          and time of your visit. This data is used only to operate, secure,
          and improve the website.
        </p>
        <h2>Cookies</h2>
        <p>
          This website does not set its own tracking cookies. However, third
          parties whose services are used on this site — in particular Google,
          for advertising — may use cookies, web beacons, and similar
          technologies as described in the next section. Most web browsers
          allow you to refuse or delete cookies through their settings.
        </p>
        <h2>Google AdSense and advertising cookies</h2>
        <ul>
          <li>
            Third-party vendors, including Google, use cookies to serve ads
            based on a user&apos;s prior visits to this website or other
            websites.
          </li>
          <li>
            Google&apos;s use of advertising cookies enables it and its
            partners to serve ads to our users based on their visit to this
            site and/or other sites on the internet.
          </li>
          <li>
            Google may use the DART cookie to serve ads based on your visit
            to this and other sites.
          </li>
          <li>
            You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . You can also opt out of some third-party vendors&apos; use of
            cookies for personalized advertising at{" "}
            <a
              href="https://www.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.aboutads.info
            </a>
            .
          </li>
        </ul>
        <h2>Links to other websites</h2>
        <p>
          Our guides link to official government websites (for example NADRA,
          the Directorate General of Passports, and the FBR) and to other
          external sites for your convenience. We are not responsible for the
          content or privacy practices of those websites, and we encourage you
          to read their privacy policies when you visit them.
        </p>
        <h2>Children&apos;s privacy</h2>
        <p>
          This website provides general information for adults dealing with
          government services. It is not directed at children under the age of
          13, and we do not knowingly collect any personal information from
          children.
        </p>
        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes
          will be posted on this page, and the &ldquo;Last updated&rdquo; date
          at the top will be revised accordingly. We encourage you to review
          this page periodically.
        </p>
        <h2>Contact us</h2>
        <p>
          If you have any questions about this Privacy Policy, please reach us
          through our <a href="/contact">contact page</a>.
        </p>
      </div>
    </div>
  );
}
