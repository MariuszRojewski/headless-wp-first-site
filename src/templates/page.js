import React from "react";
// Components
import Layout from "../components/Layout/Layout";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import PageHero from "../components/PageHero/PageHero";
import PageSidebar from "../components/PageSidebar/PageSidebar";
// import Accordion from "../components/Accordion/Accordion";
// import SlideShow from "../components/SlideShow/SlideShow";
// import Carusel from "../components/SlideShow/Carusel";
// Style
import { Wrapper, ContentWrapper, PageContent } from "./page.styles";
// SEO
import { Seo } from "../components/Seo/Seo";
// Block rendering
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponents } from "../config/blockRendererComponents";
import { Link } from "gatsby";

const PageTemplate = ({ pageContext }) => {
  console.log("PageTemplate 123: ", pageContext);

  const customInternalLinkComponent = (
    { internalHref, target, rel, className, children, ...rest },
    index
  ) => {
    return (
      <Link
        key={index}
        to={internalHref}
        className={rest.attribs.class}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  };

  return (
    <Layout>
      {pageContext.featuredImage ? (
        <PageHero
          img={
            pageContext.featuredImage.node.localFile.childImageSharp
              .gatsbyImageData
          }
        />
      ) : null}
      <Wrapper>
        <BreadCrumb crumb={pageContext} />
        <ContentWrapper>
          <PageSidebar sidebar={pageContext} />
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
            {pageContext.blocks.length !== 0 ? (
              <BlockRendererProvider
                customInternalLinkComponent={customInternalLinkComponent}
                siteDomain={process.env.GATSBY_WP_URL}
                allBlocks={pageContext.blocks}
                renderComponent={blockRendererComponents}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
            )}
            {/* <Carusel slideshowBlocks={pageContext.ACF_SlideshowModule} /> */}
            {/* <Accordion accordionBlocks={pageContext.ACF_AccordionModule} /> */}
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default PageTemplate;

export const Head = ({ pageContext }) => {
  const metaData = pageContext.seo;

  return <Seo title={metaData.title} description={metaData.metaDesc} />;
};
