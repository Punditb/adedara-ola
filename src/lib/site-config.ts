// Page switches. Change false to true to show a page.
// While false, a page shows "Coming soon", is left out of the menu,
// footer and sitemap, and is hidden from search engines.
export const PAGE_VISIBLE: Record<"projects" | "investors" | "properties", boolean> = {
  projects: false,
  investors: false,
  properties: false,
};

export const COMING_SOON_HEAD = {
  meta: [
    { title: "Coming Soon | Adedara Ola & Co." },
    { name: "robots", content: "noindex, nofollow" },
  ],
};