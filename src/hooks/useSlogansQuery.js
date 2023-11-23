import { graphql, useStaticQuery } from "gatsby";

function useSlogansQuery() {
  const data = useStaticQuery(graphql`
    query MySlogansQuery {
      wp {
        acfOptionsSlogans {
          slogansRotator {
            slogans {
              label
              author
            }
          }
        }
      }
    }
  `);
  return data;
}

export default useSlogansQuery;
