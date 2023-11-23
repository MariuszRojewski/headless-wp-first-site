import styled from "styled-components";

export const OverlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${(props) => (props.menuOpen ? "1" : "0")};
  transform: ${(props) =>
    props.menuOpen ? "translateX(0%)" : "translateX(-100%)"};
  z-index: 100000;
  background: #000;
  left: 0px;
  padding: 20px;
  transition: all 0.3s ease;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 40px;

    .logo {
      max-width: 200px;
      margin: 0 0 60px 0;
    }

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 0;

      li {
        margin: 0 0 20px 0;
        font-family: "Teko", Arial, Helvetica, sans-serif;
        font-size: 20px;
        transition: all 0.3s ease;

        a {
          text-decoration: none;
          color: #fff;

          :hover {
            color: #ee2562;
          }
        }

        &.overlayActive {
          color: #ee2562;
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 1s ease;
    outline: none;

    :hover {
      transform: rotate(180deg);
    }
  }
`;

export const NavigationWrapper = styled.nav`
  text-transform: uppercase;
  color: #212121;
  font-weight: 600;
  letter-spacing: 1px;

  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
    line-height: 35px;
    position: relative;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 25px;
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      transition: all 0.2s ease;
      text-decoration: none;
      color: #000;

      div {
        margin: -4px 0 0 5px;
      }
    }

    :last-child {
      margin: 0;
    }

    /* :hover > ul {
      display: flex;
      flex-direction: column;
      position: static;
    } */

    ul {
      animation: fadeInMenu 0.3s both ease-in;
      display: none;
      position: absolute;
      top: 0;
      left: 100%;
      flex-direction: column;
      background: #fff;
      padding: 15px 10px;
      width: auto;

      @media (min-width: 1420px) {
        left: 100%;
      }

      li {
        width: 100%;
        font-size: 20px;
        line-height: 20px;

        a {
          width: 100%;
          padding: 5px 10px;
          text-decoration: none;
          white-space: nowrap;
          color: #000;

          :hover {
            color: #2967db;
          }
        }
      }
    }
  }

  .mm-show {
    display: flex !important;
    flex-direction: column !important;
    position: static !important;
  }

  .mobile-nav-active {
    color: #2967db !important;
  }

  .mobile-nav-to {
    color: #fff;
  }

  .mobile-nav-item {
    display: flex;
    justify-content: center;
    align-items: center;

    .head {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .menu-arrow-down {
    color: #fff;
    cursor: pointer;
  }

  .submenu {
    width: 100%;
    margin-top: 10px;
    padding: 5px;

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

    &:hover {
      display: flex;
      flex-direction: column;
      position: static;
    }

    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      line-height: 15px;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .mobile-nav-item {
      display: flex;
      justify-content: center;
      align-items: start;

      .head {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100;
      }
    }

    .menu-arrow-down {
      color: #000;
      cursor: pointer;
      font-size: 25px;
    }

    .mobile-nav-active {
      color: #2967db !important;
    }

    .mobile-nav-to {
      color: #000;
    }
  }

  @media (min-width: 992px) {
    li {
      :hover > ul {
        display: block;
      }
    }
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

export default { OverlayWrapper, NavigationWrapper };
