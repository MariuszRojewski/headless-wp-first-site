import React from "react";
import useCTAAreaQuery from "../../hooks/useCTAAreaQuery";
import "./style.scss"; // Importowanie pliku SCSS
import CallToAction from "../CallToAction/callToAction";

function CTAArea() {
  const { cta } = useCTAAreaQuery();

  const ctaArray = new Array(3).fill("").map((el, i) => {
    return (
      <CallToAction
        key={i}
        image={
          cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp
            .gatsbyImageData
        }
        link={cta.ACF_HomePage[`cta${i + 1}Link`]}
        text={cta.ACF_HomePage[`cta${i + 1}Text`]}
      />
    );
  });

  return (
    <div className="homepage-cta-block">
      <div className="container">
        <div className="cta-area">{ctaArray}</div>
      </div>
    </div>
  );
}

export default CTAArea;
