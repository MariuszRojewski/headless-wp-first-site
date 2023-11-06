import * as React from "react";
import Layout from "../components/Layout/Layout";
// import Hero from "../components/Hero/Hero";
import HeroSlider from "../components/SlideShow/HeroSlider";
import CTAArea from "../components/CTAArea/CTAArea";
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost";
import Quote from "../components/CustomText/CustomText";
import MainMenu from "../components/MainMenu/MainMenu";
import { Seo } from "../components/Seo/Seo";
// Block rendering
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponents } from "../config/blockRendererComponents";
import { Link } from "gatsby";
import "./homepage-style.scss";

// kontynuuj od 5:14:00
// https://www.youtube.com/watch?v=zaV41KpiDGk

// do poprawy masz PageSidebar, do PageSidebar przeazałeś propsa z data
// bez rozbića które przewiduje komponenta na pomniejsze propsy

export default function Homepage({ pageContext }) {
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
    <div>
      <Layout>
        {/* <Hero /> */}
        <MainMenu />
        <HeroSlider />
        <CTAArea />
        <Quote />
        {/* <LatestBlogPost /> */}
        <div className="homepage-blocks">
          {/* <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} /> */}
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
        </div>
      </Layout>
    </div>
  );
}

export const Head = () => <Seo />;
