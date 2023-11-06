import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getClasses } from "@webdeveducation/wp-block-tools";
import { Link } from "gatsby";
import styled from "styled-components";

export const Gallery = ({ images, className }, index) => {
  return (
    <StyledParentFigure className={className}>
      {images.map((image) => {
        const figureClassName = getClasses(image);

        if (image.attributes.linkDestination !== "none") {
          return (
            <figure key={index} className={figureClassName}>
              <Link to={image.attributes.href}>
                <GatsbyImage
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
            <figure key={index} className={figureClassName}>
              <GatsbyImage
                image={image.attributes.gatsbyImage}
                alt={
                  image.attributes.alt ? image.attributes.alt : "Gallery image"
                }
                className="image--classic"
              />
            </figure>
          );
        }
      })}
    </StyledParentFigure>
  );
};

const StyledParentFigure = styled.figure`
  display: flex;
  box-sizing: border-box;
  margin: 0;
  flex-wrap: wrap;
  align-items: normal;

  figure {
    width: calc(
      33.33% - var(--wp--style--unstable-gallery-gap, 16px) * 0.66667
    );
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    max-width: 100%;
    position: relative;
    margin: 0;
    height: 100%;

    @media (max-width: 600px) {
      width: calc(50% - var(--wp--style--unstable-gallery-gap, 16px) / 2);
    }

    @media (max-width: 480px) {
      width: 100%;
    }

    img {
      display: block;
      height: 100%;
      max-width: 100% !important;
      width: auto;
      width: 100%;
      min-height: 120px;

      -o-object-fit: cover;
      object-fit: cover;
      box-sizing: border-box;
    }

    a {
      img {
        display: block;
        height: 100%;
        max-width: 100% !important;
        width: auto;
        width: 100%;

        -o-object-fit: cover;
        object-fit: cover;
        box-sizing: border-box;
      }
    }
  }
`;
