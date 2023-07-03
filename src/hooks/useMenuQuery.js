import { graphql, useStaticQuery } from "gatsby";

function useMenuQuery() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }

      menu: wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                label
                url
                id
              }
            }
          }
        }
      }
    }
  `);

  return data;
}

export default useMenuQuery;
