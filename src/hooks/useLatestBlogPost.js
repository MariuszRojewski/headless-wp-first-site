import { graphql, useStaticQuery } from "gatsby";

function useLatestBlogPost() {
  const data = useStaticQuery(graphql`
    query MyLatestBlogPostQuery {
      allWpPost(sort: { date: DESC }) {
        edges {
          node {
            id
            title
            excerpt
            uri
            featuredImage {
              node {
                gatsbyImage(
                  layout: FULL_WIDTH
                  placeholder: TRACED_SVG
                  width: 50
                  quality: 40
                )
                altText
              }
            }
          }
        }
      }
    }
  `);

  return data;
}

export default useLatestBlogPost;
