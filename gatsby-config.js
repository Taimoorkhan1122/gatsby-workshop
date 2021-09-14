module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "react summit gatsby workshop",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/markdown-pages`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
