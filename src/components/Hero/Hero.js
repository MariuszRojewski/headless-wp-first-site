import React from "react";
import { getImage } from "gatsby-plugin-image";
import useHeroQuery from "../../hooks/useHeroQuery";
import { Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles";

function Hero() {
  const {
    // data to ACF
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery();

  const imageData = getImage(data.heroImage.localFile);

  return (
    <Wrapper>
      <StyledImg image={imageData} alt="Gero image" />
      <HeaderWrapper>
        <h1>{data.heroText}</h1>
      </HeaderWrapper>
    </Wrapper>
  );
}

export default Hero;
