import React from "react";
import { getImage } from "gatsby-plugin-image";
import useHeroQuery from "../../hooks/useHeroQuery";
import { Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles";
import { Link } from "gatsby";

function Hero() {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery();

  const imageData = getImage(data.heroImage.localFile);
  const heroText = data.heroText;
  const heroSubText = data.heroSubText;
  const heroButonDestination = data.heroButonDestination.uri;

  console.log("HERO BUTTON DATA: ", heroButonDestination);

  return (
    <Wrapper>
      <StyledImg image={imageData} alt="Gero image" />
      <HeaderWrapper>
        {heroText ? <h1 className="hero-header">{heroText}</h1> : null}
        {heroSubText ? <h2 className="hero-subtext">{heroSubText}</h2> : null}

        <Link className="cta-button" to={heroButonDestination}>
          Sprawdź naszą ofertę!
        </Link>
      </HeaderWrapper>
    </Wrapper>
  );
}

export default Hero;
