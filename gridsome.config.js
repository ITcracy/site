// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "ITcracy",
  icon: {
    favicon: "./src/assets/favicon.png",
    touchicon: "./src/assets/apple-touch-icon.png",
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : "https://itcracy.com",
  settings: {
    facebook:
      process.env.URL_FACEBOOK ||
      "https://www.facebook.com/ITcracy-106034727773892/",
    instagram: process.env.URL_INSTAGRAM || "https://www.instagram.com/itcracy",
    gitlab: process.env.URL_GITLAB || "https://gitlab.com/itcracy",
    github: process.env.URL_GITHUB || "https://github.com/ITcracy",
    youtube:
      process.env.URL_YOUTUBE ||
      "https://www.youtube.com/channel/UC6_qlLt9q-o3K5E0Un6eCYw",
    nav: {
      links: [{ path: "/about/", title: "About" }],
    },
    sidebar: [
      {
        name: "about",
        sections: [
          {
            title: "Who are we",
            items: ["/about/"],
          },
          {
            title: "What We Do",
            items: [
              "/about/automation/",
              "/about/apps-development/",
              "/about/training/",
            ],
          },
          {
            title: "Demo",
            items: ["/demo/workflow/", "/demo/data-extraction/"],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "**/*.md",
        typeName: "MarkdownPage",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },

    {
      use: "gridsome-plugin-gtm",
      options: {
        id: process.env.GTM_ID ? process.env.GTM_ID : "GTM-TK2KSCJ",
        enabled: true,
        debug: true,
      },
    },

    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },

    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: process.env.GA_ID ? process.env.GA_ID : "UA-165416389-1",
      },
    },

    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 3600,
      },
    },
    {
      use: "gridsome-plugin-robots",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
