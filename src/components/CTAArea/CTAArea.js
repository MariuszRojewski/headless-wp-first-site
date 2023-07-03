import React from "react";
import useCTAAreaQuery from "../../hooks/useCTAAreaQuery";
import { WrapperAbc } from "./CTAArea.styles";
import CTA from "../CTA/CTA";

function CTAArea() {
  const { cta } = useCTAAreaQuery();
  console.log("CTA: ", cta);

  const ctaArray = new Array(3)
    .fill("")
    .map((el, i) => (
      <CTA
        key={i}
        image={
          cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp
            .gatsbyImageData
        }
        link={cta.ACF_HomePage[`cta${i + 1}Link`]}
        text={cta.ACF_HomePage[`cta${i + 1}Text`]}
      />
    ));

  return <WrapperAbc>{ctaArray}</WrapperAbc>;
}

export default CTAArea;
