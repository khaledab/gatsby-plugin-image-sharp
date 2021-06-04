const dotenv = require("dotenv");

const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        downloadLocal: true,
      },
    },
  ],
};
