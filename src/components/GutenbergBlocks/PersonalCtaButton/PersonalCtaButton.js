import React from "react";
import { Link } from "gatsby";
import "./style.scss";

export const PersonalCtaButton = ({ destination, label }) => {
  return (
    <Link to={destination} className="cta-button">
      {label}
    </Link>
  );
};
