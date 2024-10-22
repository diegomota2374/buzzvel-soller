// next-seo.config.js
const urlDomain = process.env.NEXT_PUBLIC_DOMAIN_URL;
const defaultSEO = {
  title: "buzzable challenge",
  description:
    "buzzable challenge where a fully responsive and animated figma model was followed.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: urlDomain,
    siteName: "soller",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default defaultSEO;
