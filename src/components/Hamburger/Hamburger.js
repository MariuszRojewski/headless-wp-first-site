import React from "react";
import { HamburgerButton } from "./Hamburger.styles";
import HamburgerIcon from "../../images/menu-icon.svg";
import { FiMenu } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

function Hamburger({ handleOverlayMenu }) {
  return (
    <HamburgerButton onClick={handleOverlayMenu}>
      <HiMenu
        className="mobile-menu"
        src={HamburgerIcon}
        alt="menu-hamburger"
      />
    </HamburgerButton>
  );
}

export default Hamburger;
