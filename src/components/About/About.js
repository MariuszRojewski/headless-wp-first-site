import React from "react";
import useAboutQuery from "../../hooks/useAboutQuery";
import { AboutWrapper, AboutImage } from "./About.styles";

function About() {
  const data = useAboutQuery();
  const imageData = data.wpPage.featuredImage.node.sourceUrl;
  const content = data.wpPage.content;

  return (
    <AboutWrapper>
      <AboutImage image={imageData} />
      <div
        className="about-text"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </AboutWrapper>
  );
}

export default About;
