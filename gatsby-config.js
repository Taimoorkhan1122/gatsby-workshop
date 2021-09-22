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
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: `i6qciz63`,
        dataset: `production`,
        watchMode: true,
        token: `skkaydODppfvcAny7yZia6gsSO8fnaQgK18evJf8NVAK0qcHTiHFUjCQCeLbCdcgxyC5FM6sBcf4Fmsnfva3Oa73pQ8lSrQlGT8rqWforRIWNIMwAnCHKYMFR5dPI225tytFEIWfAAsdWUJTgPEZ1xKoMdbSEsdkABZhPXhrXdPbyIMVs1RI`,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: "i6qciz63",
        dataset: "production",
      },
    },
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
