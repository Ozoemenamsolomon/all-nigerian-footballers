module.exports = {
  siteMetadata: {
    title: 'All Nigerian Fooballers',
    description:
      'An open source project for infos on the past and present players of the super eagles.',
    author: '@iam_solozo',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'All Nigerian Footballers',
        short_name: 'Naija Footballers',
        start_url: '/',
        background_color: '#008753',
        theme_color: '#008753',
        display: 'standalone',
        icon: 'src/images/nff-logo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
};
