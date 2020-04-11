// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ITcracy',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/apple-touch-icon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com'),
  settings: {
    gitlab : process.env.URL_GITLAB || true,
    github: process.env.URL_GITHUB || true,
    nav: {
      links: [
        { path: '/about/', title: 'About' }
      ]
    },
    sidebar: [
      {
        name: 'about',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/about/',
              '/about/installation/',
              '/about/writing-content/',
              '/about/deploying/',
            ]
          },
          {
            title: 'Configuration',
            items: [
              '/about/settings/',
              '/about/sidebar/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }

  ]
}
