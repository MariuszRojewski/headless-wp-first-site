import { graphql, useStaticQuery } from "gatsby";

function useCTAAreaQuery() {
  const data = useStaticQuery(graphql`
    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(
            width: 720
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
          )
        }
      }
    }

    query MyCTAQuery {
      cta: wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          cta1Text
          cta1Link
          cta1Image {
            ...ctaImage
          }

          cta2Text
          cta2Link
          cta2Image {
            ...ctaImage
          }

          cta3Text
          cta3Link
          cta3Image {
            ...ctaImage
          }
        }
      }
    }
  `);
  return data;
}

export default useCTAAreaQuery;
