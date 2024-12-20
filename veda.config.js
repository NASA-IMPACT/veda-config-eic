module.exports = {
  /**
   * Glob path for the datasets.
   */
  datasets: "./datasets/*.data.mdx",

  /**
   * Glob path for the stories.
   */
  stories: "./stories/*.mdx",

  // App component and content overrides.
  // See docs/CONFIGURATION.md for more information.
  pageOverrides: {
    // Content for the about page.
    // Type: Content override
    aboutContent: "./overrides/about.mdx",
    // Content for the home page.
    // Type: Content override
    homeContent: "./overrides/home/index.mdx",
    // Content for the development page.
    // Type: Content override
    developmentContent: "./overrides/development/index.mdx",
    storiesHubContent: "./overrides/theme/content/index.mdx",
    storiesHubHero: "./overrides/theme/hero/index.mdx",
    // Component for the home hero banner.
    homeHero: "./overrides/components/home-hero/index.mdx",

    // Component for the header brand.
    headerBrand: "./overrides/components/header-brand/index.mdx",
    // Component for the footer.
    pageFooter: "./overrides/components/page-footer/index.mdx",
    "/visit": "./custom-pages/visit/index.mdx",
    "/teach": "./custom-pages/teach/index.mdx",
  },

  banner: {
    text: 'TO BE REPLACED WITH GOV SHUTDOWN CONTENT',
    url: '/',
    expires: '2025-06-01T12:00:00-04:00',
    type: 'info'
  },

  strings: {
    stories: {
      one: "Theme",
      other: "Themes",
    },
    storiesBanner: "Nine themes, one Earth.",
    dataCatalogBanner:
      "These datasets offer a sample of the global, actionable, and regularly updated data products that Earth.gov will offer. This curated list is not a comprehensive accounting of all Earth data produced by the federal government and additional datasets will be added as they become available.",
  },

  theme: {
    color: {
      primary: "#0550D8",
      link: "#1565EF",
    },
    type: {
      base: {
        color: "#1B2631",
        family: '"Inter", sans-serif',
      },
    },
    button: {
      type: {
        case: "none",
        weight: 500,
      },
    },
  },
};
