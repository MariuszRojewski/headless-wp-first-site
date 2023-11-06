import React from "react";
import "./style.scss";
import { GatsbyImage } from "gatsby-plugin-image";

export const Columns = ({ style, className, gatsbyImage, children }) => {
  return (
    <div style={style} className={`${className} columns-image-wrapper`}>
      <GatsbyImage image={gatsbyImage} alt="Banner" layout="fullWidth" />
      {children}
    </div>
  );
};
