// Site URL is env-configurable — set SITE_URL in .env / Vercel env vars.
// Falls back to the live domain (igaf.me).
export const SITE_URL = (process.env.SITE_URL || "https://igaf.me").replace(
  /\/+$/,
  "",
);
export const SITE_NAME = "KaamGuide";
