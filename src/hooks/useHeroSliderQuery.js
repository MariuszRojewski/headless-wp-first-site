import { graphql, useStaticQuery } from "gatsby";

function useHeroSliderQuery() {
  const data = useStaticQuery(graphql`
    query HeroSliderQuery {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          slider1 {
            image {
              gatsbyImage(
                quality: 50
                width: 1920
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
            title
            subText
            button {
              title
              destination {
                url
                title
                target
              }
            }
          }
          slider2 {
            image {
              gatsbyImage(
                quality: 50
                width: 1920
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
            title
            subText
            button {
              title
              destination {
                url
                title
                target
              }
            }
          }
          slider3 {
            image {
              gatsbyImage(
                quality: 50
                width: 1920
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
            title
            subText
            button {
              title
              destination {
                url
                title
                target
              }
            }
          }
        }
      }
    }
  `);

  return data;
}

export default useHeroSliderQuery;
