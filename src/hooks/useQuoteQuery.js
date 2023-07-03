import { graphql, useStaticQuery } from "gatsby";

function useQuoteQuery() {
  const data = useStaticQuery(graphql`
    query myQuoteQuery {
      wpPage(databaseId: { eq: 47 }, ACF_HomePage: {}) {
        ACF_HomePage {
          citat1Text
          citat1Author
        }
      }
    }
  `);
  return data;
}

export default useQuoteQuery;
