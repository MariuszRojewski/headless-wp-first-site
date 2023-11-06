import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
  align-items: stretch;

  max-width: 1180px;
  margin: 40px auto 40px auto;
  padding: 30px 20px;
  border-top: 1px solid #ddd;
  text-align: center;

  .CardWrapper {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const LatestRealisation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 15px;
  -webkit-box-shadow: 12px 12px 18px -16px rgba(200, 200, 200, 1);
  -moz-box-shadow: 12px 12px 18px -16px rgba(200, 200, 200, 1);
  box-shadow: 12px 12px 18px -16px rgba(200, 200, 200, 1);
  width: 100%;
`;

export const Header = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 1px;
  color: rgb(40, 40, 40);
  text-transform: uppercase;
  line-height: 40px;
  margin-top: 40px;
`;

export const Card = styled.div`
  padding: 20px 20px 25px 20px;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    height: 245px;
  }
  @media screen and (min-width: 992px) {
    height: 305px;
  }
  @media screen and (min-width: 1200px) {
    height: 285px;
  }

  .intro-text {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }

  button {
    margin-top: auto;
    border: 0;
    border-radius: 15px;
    padding: 5px 20px;
    background-color: blue;
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 1px;
    width: max-content;
    cursor: pointer;

    background-color: rgba(34, 29, 206, 1);
    background-image: linear-gradient(
      90deg,
      rgba(34, 29, 206, 1) 0%,
      rgba(19, 16, 138, 1) 100%
    );

    &:hover {
      background-color: rgba(23, 20, 141, 1);
      background-image: linear-gradient(
        90deg,
        rgba(23, 20, 141, 1) 0%,
        rgba(8, 7, 53, 1) 100%
      );
    }
  }
`;

export const CardHeader = styled.h4`
  margin: 0 0 15px 0;
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;
