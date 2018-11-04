module.exports = {
  siteMetadata: {
    siteName: 'Midterm Election 2018',
    description: 'A Daily Bruin guide to the 2018 Midterm Election',
    url: '',
  },
  pathPrefix: '/2018/midterm-election',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'online.demoaml',
      },
    },
  ],
}
