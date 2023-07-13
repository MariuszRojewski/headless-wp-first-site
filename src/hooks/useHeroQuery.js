import { graphql, useStaticQuery } from "gatsby";

function useHeroQuery() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage(databaseId: { eq: 47 }) {
        id
        ACF_HomePage {
          heroText
          heroSubText
          heroButonDestination {
            ... on WpPage {
              id
              uri
            }
            ... on WpPost {
              id
              uri
            }
          }

          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `);
  return data;
}

export default useHeroQuery;
