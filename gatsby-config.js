module.exports = {
  siteMetadata: {
    siteName: 'Midterm Election 2018',
    description: 'A Daily Bruin guide to the 2018 Midterm Election',
    url: '',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
