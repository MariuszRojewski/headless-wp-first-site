import React from "react";
import { Link } from "gatsby";

export const Button = ({ style, className, attributs }) => {
  return (
    <div className={className} style={style}>
      <Link
        to={attributs.href}
        className="wp-block-button__link wp-element-button"
      >
        {attributs.text}
      </Link>
    </div>
  );
};
