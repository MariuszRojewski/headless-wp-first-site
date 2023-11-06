import React from "react";
import useCustomText from "../../hooks/useCustomText";
import "./style.scss"; // Importowanie pliku SCSS

function Quote() {
  const data = useCustomText();

  return (
    <div className="custom-text-block">
      <div className="container">
        <h2 className="header">Kim jesteśmy?</h2>
        <p
          className="text"
          dangerouslySetInnerHTML={{
            __html: data.wpPage.ACF_HomePage.customTextArea,
          }}
        />
      </div>
    </div>
  );
}

export default Quote;
