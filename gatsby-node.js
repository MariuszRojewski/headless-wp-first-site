// jest to rozwiąanie z noda, do obsługi scieżek
const path = require("path");

// Metoda assignIds typu helper, pomoże nam wygenerowac uniaktowe
// ID dla bloków gutenberga. Metoda assignGatsbyImage, pozwala na
// wywołanie w danym bloku grafik poprzez Gatsbyimage
const {
  assignIds,
  assignGatsbyImage,
} = require("@webdeveducation/wp-block-tools");
const fs = require("fs");

// 1. TRZEBA TU ODTWORZYĆ ROBIENIE SZABLONU DLA PAGES WRAZ Z GATSBYIMAGE
// INACZEJ NIE BĘDĄ CHODZIŁY GALERIE BLOCKACH ITD.

// 2. DO USUNIĘCIA {wpPage.link}.js i do przerobienia jako tempaltka w gatsby-node.js

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const homeTemplate = path.resolve("./src/templates/homepage.js");
  const pageTemplate = path.resolve("./src/templates/page.js");
  const archiveTemplate = path.resolve("./src/templates/archive.js");

  const result = await graphql(`
    {
      wp {
        themeStylesheet
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }

      wpPage {
        id
        parentId
        title
        uri
        slug
        content
        status
        seo {
          title
          metaDesc
        }
        featuredImage {
          node {
            id
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
              }
            }
          }
        }
        wpChildren {
          nodes {
            ... on WpPage {
              id
              uri
              title
            }
          }
        }
      }

      allWpPage {
        nodes {
          id
          parentId
          blocks
          title
          uri
          slug
          content
          status
          seo {
            title
            metaDesc
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
                }
              }
            }
          }
          wpChildren {
            nodes {
              ... on WpPage {
                id
                uri
                title
              }
            }
          }
        }
      }
    }
  `);

  try {
    fs.writeFileSync(
      "./public/themeStylesheet.css",
      result.data.wp.themeStylesheet
    );
  } catch (e) {}

  // Check for errors
  if (result.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, result.errors);
    return;
  }

  const { allWpCategory, wp } = result.data;
  const allPages = result.data.allWpPage.nodes;
  const homePageSlug = "home";

  for (let i = 0; i < allPages.length; i++) {
    const page = allPages[i];

    let blocks = page.blocks;
    blocks = assignIds(blocks);
    blocks = await assignGatsbyImage({
      blocks,
      graphql,
      coreMediaText: true,
      coreImage: true,
      coreCover: true,
    });

    // Sprawdź czy obecna strona jest stroną główną
    const isHomePage = page.slug === homePageSlug;

    if (isHomePage) {
      // Strona główna - użyj homeTemplate
      createPage({
        path: "/",
        component: homeTemplate,
        context: {
          ...page,
          blocks,
        },
      });
    } else {
      // Inne strony - użyj pageTemplate
      createPage({
        path: page.uri,
        component: pageTemplate,
        context: {
          ...page,
          blocks,
          allPages: allPages,
          pageId: page.id,
        },
      });
    }
  }

  // Create pages for each category
  allWpCategory.edges.forEach((category) => {
    const postsPerPage = wp.readingSettings.postsPerPage;
    const numberOfPosts = category.node.count;
    const numPages = Math.ceil(numberOfPosts / postsPerPage);

    // Some categories may be empty and we don't want to create pages for them
    // Also don't want to create pages for uncategorized
    if (numberOfPosts > 0 || category.node.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path:
            i === 0 ? `${category.node.uri}` : `${category.node.uri}${i + 1}`,
          component: archiveTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            catId: category.node.id,
            catName: category.node.name,
            catUri: category.node.uri,
            categories: allWpCategory,
          },
        });
      });
    }
  });
};
