import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  text-transform: uppercase;
  color: #212121;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: none;

  .nav-active {
    color: #2967db;
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  ul li {
    display: block;
    margin: 0 10px 0 0;
    float: left;
    line-height: 20px;
    position: relative;
    font-weight: 700;
    letter-spacing: 1px;

    a {
      display: flex;
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      text-decoration: none;
      color: #000;

      div {
        margin: -4px 0 0 5px;
      }
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: block;
  }

  ul li a:hover {
    color: #2967db;
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none;
    position: absolute;
    right: 0;
    margin: 0;
    top: 20px;
    text-transform: none;
    background: #fff;
    padding: 15px 10px;
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);

    @media (min-width: 1420px) {
      left: 0;
      right: unset;
    }
  }

  ul ul li {
    width: auto;
    min-width: 170px;
    margin: 5px 0;
  }

  ul ul li a {
    padding: 5px 10px;
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
