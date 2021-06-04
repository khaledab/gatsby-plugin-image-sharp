import { graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";

const MOBILE_QUERY = `(max-width: 767px)`;
const TABLET_QUERY = `(max-width: 992px)`;

const IndexPage = ({ data }) => {
  const desktopImage = getImage(
    data.hero.illustration.localFile.childImageSharp.desktopImage
  );
  const mobileImage = getImage(
    data.hero.illustration.localFile.childImageSharp.mobileImage
  );
  const tabletImage = getImage(
    data.hero.illustration.localFile.childImageSharp.tabletImage
  );
  const greyScale = getImage(
    data.hero.illustration.localFile.childImageSharp.greyScale
  );

  const images = withArtDirection(desktopImage, [
    {
      media: TABLET_QUERY,
      image: tabletImage,
    },
    {
      media: MOBILE_QUERY,
      image: mobileImage,
    },
  ]);

  return (
    <Container>
      <h1>Responsive image </h1>
      <StyledImage alt="animals" image={images} />
      <h1>--------------------</h1>
      <h1>Desktop Image</h1>
      <GatsbyImage image={desktopImage} />
      <h1>Tablet Image</h1>
      <GatsbyImage image={tabletImage} />
      <h1>Mobile Image</h1>
      <GatsbyImage image={mobileImage} />
      <h1>greyScale Image</h1>
      <GatsbyImage image={greyScale} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(GatsbyImage)`
  @media (max-width: 992px) {
    width: 400px !important;
    height: 331px !important;
  }
  @media (max-width: 767px) {
    width: 150px !important;
    height: 124px !important;
  }
`;

export const query = graphql`
  {
    hero: contentfulContentBlock(type: { eq: "hero" }) {
      id
      heading
      description {
        id
        description
      }
      illustration {
        localFile {
          childImageSharp {
            desktopImage: gatsbyImageData(
              formats: WEBP
              layout: FIXED
              width: 800
            )
            tabletImage: gatsbyImageData(
              formats: WEBP
              layout: FIXED
              width: 400
            )
            mobileImage: gatsbyImageData(
              formats: WEBP
              layout: FIXED
              width: 150
            )
            greyScale: gatsbyImageData(
              formats: WEBP
              layout: FIXED
              transformOptions: { grayscale: true }
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;
