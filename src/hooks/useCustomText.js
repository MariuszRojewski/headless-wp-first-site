import { graphql, useStaticQuery } from "gatsby";

function useCustomText() {
  const data = useStaticQuery(graphql`
    query myCustomTextQuery {
      wpPage(databaseId: { eq: 47 }, ACF_HomePage: {}) {
        ACF_HomePage {
          customTextArea
        }
      }
    }
  `);
  return data;
}

export default useCustomText;
