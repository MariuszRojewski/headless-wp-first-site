import { graphql, useStaticQuery } from "gatsby";

function useAboutQuery() {
  const data = useStaticQuery(graphql`
    query myAboutQuery {
      wpPage(databaseId: { eq: 47 }) {
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `);
  return data;
}

export default useAboutQuery;
