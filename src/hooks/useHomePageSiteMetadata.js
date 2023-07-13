import { graphql, useStaticQuery } from "gatsby";

function useHomePageSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          title
          description
          url
        }
      }
    }
  `);

  return data;
}

export default useHomePageSiteMetadata;
