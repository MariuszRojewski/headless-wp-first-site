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
    font-size: 0.9rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  .submenu {
    z-index: 100;

    li {
      width: 100%;

      a {
        width: 100%;
      }
    }
  }

  .level-3,
  .level-4,
  .level-5,
  .level-6,
  .level-7,
  .level-8,
  .level-9,
  .level-10,
  .level-11,
  .level-12,
  .level-13,
  .level-14 {
    right: unset;
    left: 0;
  }

  .level-2 {
    background-color: #fcfcfc;
  }
  .level-3 {
    background-color: #f5f5f5;
  }
  .level-4 {
    background-color: #ebebeb;
  }
  .level-5 {
    background-color: #e1e1e1;
  }
  .level-6 {
    background-color: #d7d7d7;
  }
  .level-7 {
    background-color: #cdcdcd;
  }
  .level-8 {
    background-color: #c3c3c3;
  }
  .level-9 {
    background-color: #b9b9b9;
  }
  .level-10 {
    background-color: #afafaf;
  }
  .level-11 {
    background-color: #a5a5a5;
  }
  .level-12 {
    background-color: #9b9b9b;
  }
  .level-13 {
    background-color: #919191;
  }
  .level-14 {
    background-color: #878787;
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
    top: 100%;
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
    margin: 2px 0;

    @media (max-width: 1199px) {
      margin: 0;
    }
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
