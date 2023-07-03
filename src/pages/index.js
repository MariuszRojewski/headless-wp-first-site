import * as React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import CTAArea from "../components/CTAArea/CTAArea";
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost";
import Quote from "../components/Quote/Quote";
import About from "../components/About/About";

// kontynuuj od 5:14:00
// https://www.youtube.com/watch?v=zaV41KpiDGk

// do poprawy masz PageSidebar, do PageSidebar przeazałeś propsa z data
// bez rozbića które przewiduje komponenta na pomniejsze propsy

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <CTAArea />
        <LatestBlogPost />
        <Quote />
        <About />
      </Layout>
    </div>
  );
};

export default IndexPage;
