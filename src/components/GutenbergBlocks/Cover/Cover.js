import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export const Cover = ({ style, className, gatsbyImage, children }) => {
  return (
    <div style={style} className={className}>
      <GatsbyImage
        image={gatsbyImage}
        alt="Banner"
        objectFit="cover"
        objectPosition="center"
      />
      {children}
    </div>
  );
};
