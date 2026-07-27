export const site = {
  name: "Next.js Template",
  url: "https://example.com",
  description: "A Next.js starter with Tailwind CSS, Lenis, and Motion.",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
} as const;

export type Site = typeof site;
