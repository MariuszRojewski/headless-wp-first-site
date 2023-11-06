import { graphql, useStaticQuery } from "gatsby";

function useMainMenuQuery() {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      site {
        siteMetadata {
          title
        }
      }

      wp {
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              parentItem {
                label
                selectPageOrPost {
                  ... on WpPage {
                    id
                    uri
                  }
                  ... on WpPost {
                    id
                    uri
                  }
                }
              }
              subMenuItems {
                label
                selectPageOrPost {
                  ... on WpPost {
                    id
                    uri
                  }
                  ... on WpPage {
                    id
                    uri
                  }
                }
              }
              selectedCategories {
                id
                name
                uri
              }
            }
            callToActionButton {
              label
              destination {
                ... on WpPage {
                  id
                  uri
                }
                ... on WpPost {
                  id
                  uri
                }
              }
            }
          }
        }
      }
    }
  `);

  return data;
}

export default useMainMenuQuery;
