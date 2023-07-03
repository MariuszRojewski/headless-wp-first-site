import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
// Components
import Layout from "../components/Layout/Layout";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import PageHero from "../components/PageHero/PageHero";
import PageSidebar from "../components/PageSidebar/PageSidebar";

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: flex;
  }
`;

const PageContent = styled.article`
  margin-top: 20px;
`;

const PageTemplate = ({ data }) => (
  <Layout>
    {data.wpPage.featuredImage ? (
      <PageHero
        img={
          data.wpPage.featuredImage.node.localFile.childImageSharp
            .gatsbyImageData
        }
      />
    ) : null}
    <Wrapper>
      <BreadCrumb crumb={data} />
      <ContentWrapper>
        <PageSidebar sidebar={data} />
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
);

export default PageTemplate;

export const pageQuery = graphql`
  query PageQuery($id: String!) {
    allWpPage {
      nodes {
        id
        title
        uri
        wpChildren {
          nodes {
            ... on WpPage {
              id
              title
              uri
            }
          }
        }
      }
    }
    wpPage(id: { eq: $id }) {
      id
      parentId
      title
      uri
      content
      status
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
  }
`;
