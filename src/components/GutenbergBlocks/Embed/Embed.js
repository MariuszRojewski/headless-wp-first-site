import React from "react";
import "./style.scss";

export const Embed = ({ key, style, className, attributes, children }) => {
  const embedUrl = attributes.url;

  if (!embedUrl) {
    return <div key={key}>Brak prawidłowego adresu URL.</div>;
  }

  return (
    <div key={key} className={`${className} embed`} style={style}>
      <iframe
        src={embedUrl}
        width="100%"
        height="400"
        allow="fullscreen"
        title="Embedded Content"
      />
      {children}
    </div>
  );
};
