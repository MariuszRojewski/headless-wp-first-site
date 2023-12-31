import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import ArchiveSidebar from "../components/ArchiveSidebar/ArchiveSidebar";
import Pagination from "../components/Pagination/Pagination";
import Slogans from "../components/Slogans/Slogans";

import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
  BannerWrapper,
} from "./archive.styles";

function archiveTempalte({
  data: { allWpPost },
  pageContext: { catId, categories, catName, catUri, currentPage, numPages },
}) {
  return (
    <div>
      <Layout>
        <BannerWrapper>
          <StaticImage
            src="../images/archive_headerImage.png"
            className="styled-image"
            placeholder="TRACED_SVG"
            width={1920}
            height={300}
            alt="archive Hero"
          />
          <div className="banner-shadow">
            <div className="container">
              <Slogans />
            </div>
          </div>
        </BannerWrapper>

        <Wrapper>
          <BreadCrumb forcedCrumb={{ uri: "/blog/all-posts", title: "Blog" }} />
          <ContentWrapper>
            <ArchiveSidebar catId={catId} categories={categories.edges} />
            <PageContent>
              <h1 dangerouslySetInnerHTML={{ __html: catName }} />
              {allWpPost.edges.map((post) => {
                return (
                  <article key={post.node.id} className="entry-content">
                    <Link to={`/blog${post.node.uri}`}>
                      <StyledH2
                        dangerouslySetInnerHTML={{ __html: post.node.title }}
                      />
                    </Link>
                    <StyledDate
                      dangerouslySetInnerHTML={{ __html: post.node.date }}
                    />
                    <p
                      dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                    />
                    <StyledReadMore to={`/blog${post.node.uri}`}>
                      Read More
                    </StyledReadMore>
                    <div className="dot-divider" />
                  </article>
                );
              })}
              <Pagination
                catUri={catUri}
                page={currentPage}
                totalPages={numPages}
              />
            </PageContent>
          </ContentWrapper>
        </Wrapper>
      </Layout>
    </div>
  );
}

export default archiveTempalte;

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`;
