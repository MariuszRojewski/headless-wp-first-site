import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: #ddd;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1.75fr;
    text-align: left;
  }

  .about-text {
    padding: 40px 20px 20px 40px;

    h2 {
      margin-bottom: 1rem;
      font-size: 1.75rem;
      width: 85%;
      font-weight: 900;
    }

    @media screen and (max-width: 768px) {
      padding: 20px;
    }
  }
`;

export const AboutImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: top center;
  min-height: 300px;

  @media screen and (min-width: 768px) {
    background-position: center center;
  }
`;
