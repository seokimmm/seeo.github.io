const config = require('./src/config');
const { title, description, author, googleAnalytics } = config;

module.exports = {
  siteMetadata: { title, description, author },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleAnalytics,
      },
    },

    `gatsby-plugin-react-helmet`,

    `gatsby-plugin-typescript`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_posts`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          maxDepth: 3,
        },
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon',
              size: 64,
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
      },
    },

    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.ts`,
      },
    },

    `gatsby-plugin-sitemap`,
  ],
};
