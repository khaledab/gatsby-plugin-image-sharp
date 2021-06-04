## 🚀 Gatsby plugin image using sharp

**Responsive image using withArtDirection**

With the use of withArtDirection you can display visually different image at different sizes. this includes displaying simplified logo or a tighter crop on profile picture when viewing on a small screen. You need to get the differents images from graphql and you should be able to write a media query for each size.

The aspect ratio is set by the default image and doesn’t automatically change with the different sources. The way to handle this is to use CSS media queries. I tried using the code provided in the documentation it didn't work for me, so I tried overriding the default width and height of the image wrapper and it's working fine. This is a bad solution but it's working,I wonder if we can do it in a better way!

- [Documentation](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#withartdirection)
- [Examples](https://gatsbypluginimagewithartdirect.gatsbyjs.io/)

**Grayscale image**

You can convert image to grayscale by setting grayscale to true on the transformOptions object.

- [TranformOptions](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#transformoptions)
