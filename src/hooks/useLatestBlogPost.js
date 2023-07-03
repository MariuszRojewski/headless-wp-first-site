import { graphql, useStaticQuery } from "gatsby";

function useLatestBlogPost() {
  const data = useStaticQuery(graphql`
    query MyLatestBlogPostQuery {
      allWpPost(sort: { date: DESC }) {
        edges {
          node {
            title
            excerpt
            uri
          }
        }
      }
    }
  `);

  return data;
}

export default useLatestBlogPost;
