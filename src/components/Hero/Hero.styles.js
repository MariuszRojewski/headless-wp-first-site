import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const StyledImg = styled(GatsbyImage)`
  height: 400px;
  margin-bottom: 60px;
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 700px;
    border-bottom-right-radius: 170% 20%;
    border-bottom-left-radius: 170% 20%;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-right-radius: 170% 20%;
  border-bottom-left-radius: 170% 20%;

  .hero-header {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    text-transform: none;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 3.2rem;
    }
  }

  .hero-subtext {
    font-size: 1.4rem;
    font-weight: 300;
    color: #fff;
    text-transform: none;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .cta-button {
    font-size: 0.9rem;
    line-height: 1.4rem;
    font-weight: 700;
    color: #fff;
    text-transform: none;
    text-align: center;
    background-color: rgba(34, 29, 206, 1);
    background-image: linear-gradient(
      90deg,
      rgba(34, 29, 206, 1) 0%,
      rgba(19, 16, 138, 1) 100%
    );

    letter-spacing: 1.5px;
    padding: 10px 25px;
    border-radius: 15px;
    border-width: 0;
    margin-top: 30px;
    cursor: pointer;

    &:hover {
      background-color: rgba(23, 20, 141, 1);
      background-image: linear-gradient(
        90deg,
        rgba(23, 20, 141, 1) 0%,
        rgba(8, 7, 53, 1) 100%
      );
    }

    @media screen and (min-width: 768px) {
      font-size: 1rem;
      padding: 15px 35px;
    }
  }
`;
