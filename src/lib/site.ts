// Site URL is env-configurable — set SITE_URL in .env / Vercel env vars.
// Falls back to the project placeholder until the final domain is chosen.
export const SITE_URL = (process.env.SITE_URL || "https://kaamguide.com").replace(
  /\/+$/,
  "",
);
export const SITE_NAME = "KaamGuide";
