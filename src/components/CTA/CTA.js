import React from "react";
import { Link } from "gatsby";
import {
  StyledImg,
  CTAImage,
  CTAImageText,
  CTAImageTextWrapper,
} from "./CTA.styles";

function CTA({ image, link, text }) {
  return (
    <CTAImage>
      <StyledImg image={image} alt="Cta Image" />
      <Link to={link}>
        <CTAImageTextWrapper>
          <CTAImageText>{text}</CTAImageText>
        </CTAImageTextWrapper>
      </Link>
    </CTAImage>
  );
}
export default CTA;
