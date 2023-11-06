import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getClasses } from "@webdeveducation/wp-block-tools";
import { Link } from "gatsby";
import { StyledGatsbyImage } from "./Gallery.styles";

export const Gallery = ({ className, styles, images }, index) => {
  console.log("########################## GALLERY IMAGES: ", images);
  return (
    <>
      <h2>GALERIA !!!</h2>
      <figure key={index} className={className} style={styles}>
        {images.map((image) => {
          if (image.attributes.linkDestination !== "none") {
            return (
              <figure key={index} className={getClasses(image)}>
                <Link to={image.attributes.href}>
                  <StyledGatsbyImage
                    className="image--link"
                    image={image.attributes.gatsbyImage}
                    alt={
                      image.attributes.alt
                        ? image.attributes.alt
                        : "Gallery image"
                    }
                  />
                </Link>
              </figure>
            );
          } else {
            return (
              <figure key={index} className={getClasses(image)}>
                <GatsbyImage
                  image={image.attributes.gatsbyImage}
                  alt={
                    image.attributes.alt
                      ? image.attributes.alt
                      : "Gallery image"
                  }
                />
              </figure>
            );
          }
        })}
      </figure>
    </>
  );
};
