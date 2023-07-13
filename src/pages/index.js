import * as React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import CTAArea from "../components/CTAArea/CTAArea";
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost";
import Quote from "../components/CustomText/CustomText";
import About from "../components/About/About";
import { Seo } from "../components/Seo/Seo";

// kontynuuj od 5:14:00
// https://www.youtube.com/watch?v=zaV41KpiDGk

// do poprawy masz PageSidebar, do PageSidebar przeazałeś propsa z data
// bez rozbića które przewiduje komponenta na pomniejsze propsy

export default function Homepage() {
  return (
    <div>
      <Layout>
        <Hero />
        <CTAArea />
        <Quote />
        <LatestBlogPost />
        <About />
      </Layout>
    </div>
  );
}

export const Head = () => <Seo />;
