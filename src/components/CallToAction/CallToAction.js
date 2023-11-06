import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./style.scss"; // Importowanie pliku SCSS

function CallToAction({ image, link, text }) {
  return (
    <div className="cta-image">
      <Link to={link} className="cta-link">
        <div className="image-wrapper">
          <GatsbyImage className="styled-img" image={image} alt="Cta Image" />
        </div>
        <div className="cta-image-text-wrapper">
          <p
            className="cta-image-text"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </Link>
    </div>
  );
}

export default CallToAction;
