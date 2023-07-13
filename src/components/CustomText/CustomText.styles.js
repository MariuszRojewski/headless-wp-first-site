import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(245, 247, 255);
  text-align: center;
  padding: 30px;
  color: #fff;

  img {
    display: block;
    max-width: 40px;
    margin: 20px auto 40px auto;
  }
`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
    margin: 10px 0;
    color: rgb(46, 35, 70);
  }

  @media screen and (min-width: 768px) {
    padding: 40px 0;
    text-align: justify;

    p {
      font-size: 1.5rem;
    }
  }
`;
