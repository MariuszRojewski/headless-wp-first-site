import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`;

export const CTAImage = styled.div`
  margin-bottom: 20px;
  max-height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  width: 100%;

  :hover img {
    transform: scale(1.1);
    filter: blur(2px);
  }

  @media (min-width: 768px) {
    max-height: 150px;
  }
`;

export const CTAImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(32, 25, 81, 0.35);
`;

export const CTAImageText = styled.p`
  font-weight: 700;
  letter-spacing: 0px;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;

  @media (min-width: 992px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;
