import React from "react";

// Components
import Layout from "../components/Layout/Layout";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import PageHero from "../components/PageHero/PageHero";
import PageSidebar from "../components/PageSidebar/PageSidebar";
import SidebarMessage from "../components/SidebarMessage/SidebarMessage";
import Slogans from "../components/Slogans/Slogans";
// import Accordion from "../components/Accordion/Accordion";
// import SlideShow from "../components/SlideShow/SlideShow";
// import Carusel from "../components/SlideShow/Carusel";

// Style
import {
  Wrapper,
  ContentWrapper,
  PageContent,
  BannerWrapper,
} from "./page.styles";
// SEO
import { Seo } from "../components/Seo/Seo";
// Block rendering
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponents } from "../config/blockRendererComponents";
import { Link } from "gatsby";

const PageTemplate = (props) => {
  console.log(props.pageContext);

  const hasSidebar = PageSidebar ? true : false;
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
      {props.pageContext.featuredImage ? (
        <BannerWrapper>
          <PageHero
            img={
              props.pageContext.featuredImage.node.localFile.childImageSharp
                .gatsbyImageData
            }
          />
          <div className="banner-shadow">
            <div className="container">
              <Slogans />
            </div>
          </div>
        </BannerWrapper>
      ) : null}
      <Wrapper>
        <BreadCrumb crumb={props.pageContext} />
        <ContentWrapper>
          {/* Sidebar jest wyłączony
            - rozwiazanie to nie pobiera elementów submenu, trzeba je zaktualizowac */}

          {/* <PageSidebar sidebar={props.pageContext} /> */}
          <SidebarMessage />
          <PageContent hasSidebar={hasSidebar}>
            <h1 dangerouslySetInnerHTML={{ __html: props.pageContext.title }} />
            {props.pageContext.blocks.length !== 0 ? (
              <BlockRendererProvider
                customInternalLinkComponent={customInternalLinkComponent}
                siteDomain={process.env.GATSBY_WP_URL}
                allBlocks={props.pageContext.blocks}
                renderComponent={blockRendererComponents}
              />
            ) : (
              <div
                dangerouslySetInnerHTML={{ __html: props.pageContext.content }}
              />
            )}
            {/* <Carusel slideshowBlocks={props.pageContext.ACF_SlideshowModule} /> */}
            {/* <Accordion accordionBlocks={props.pageContext.ACF_AccordionModule} /> */}
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default PageTemplate;

export const Head = (props) => {
  const metaData = props.pageContext.seo;

  return <Seo title={metaData.title} description={metaData.metaDesc} />;
};
