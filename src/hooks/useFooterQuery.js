import { graphql, useStaticQuery } from "gatsby";

function useFooterQuery() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      wp {
        acfOptionsFooter {
          ACF_Footer {
            columns {
              singleCol {
                name
                textArea
                linksGroup {
                  link {
                    title
                    url
                  }
                }
              }
            }
            siteInfoCol {
              name
              copywrite
              projectRealisation {
                linkName
                developerSiteLink
              }
            }
          }
        }
      }
    }
  `);

  return data;
}

export default useFooterQuery;
