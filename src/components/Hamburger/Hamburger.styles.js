import styled from "styled-components";

export const HamburgerButton = styled.div`
  .mobile-menu {
    position: fixed;
    display: block;
    z-index: 100000;
    right: 30px;
    top: 35px;
    width: 45px;
    height: 45px;
    padding: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: #eee;
    border-radius: 90%;

    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 992px) {
      display: none;
    }
    @media only screen and (max-width: 319px) {
      width: 40px;
      height: 40px;
    }
  }
`;
