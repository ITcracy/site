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
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://itcracy.com'),
  settings: {
    gitlab : process.env.URL_GITLAB || 'https://gitlab.com/itcracy',
    github: process.env.URL_GITHUB || 'https://github.com/ITcracy',
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
            title: 'Who are we',
            items: [
              '/about/',
            ]
          },
          {
            title: 'What We Do',
            items: [
              '/about/automation/',
              '/about/apps-development/',
              '/about/training/'
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
        id: (process.env.GA_ID ? process.env.GA_ID : 'UA-165416389-1')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }

  ]
}
