import styled from "styled-components";

export const Wrapper = styled.aside`
  margin: 40px 0 0 0;
  min-width: 25%;

  @media (min-width: 992px) {
    margin: 35px 15px 0 0;
  }
`;

export const Menu = styled.ul`
  list-style-type: circle;
  padding: 0 20px 0 0;
  margin: 0;

  .sidebar-section {
    font-size: 18px;
    color: #000;
    border-bottom: 2px #e4e4e4 solid;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
    padding: 0 0 5px 0;

    display: flex;
    justify-content: flex-start;
    width: 100%;

    img {
      max-height: 24px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }

  ul {
    li {
      margin: 0 0 5px 0px;
      color: #000;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 1px;

      a:hover {
        color: #d22e26;
      }
    }
  }

  .sidebar-highlighted {
    color: #d22e26;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    letter-spacing: 0.5px;

    a {
      font-weight: 800;
    }
  }

  span {
    margin: 0;
  }
`;
