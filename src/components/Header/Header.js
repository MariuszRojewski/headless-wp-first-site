import React from "react";
import "./style.scss";
import { Link } from "gatsby";
// import MainMenu from "../MainMenu/MainMenu";
// import useMainMenuQuery from "../../hooks/useMainMenuQuery";
import Navigation from "../Navigation/Navigation";
import useMenuQuery from "../../hooks/useMenuQuery";

import Logo from "../../images/logo.png";
// import { Wrapper, Content } from "./Header.styles";

function Header() {
  const { site, menu } = useMenuQuery();

  // const { site, wp } = useMainMenuQuery();
  // const menuItems = wp.acfOptionsMainMenu.mainMenu.menuItems;
  // const contactPage = wp.acfOptionsMainMenu.mainMenu.callToActionButton;

  return (
    <div>
      <div className="header-wrapper">
        <div className="container">
          <Link to="/">
            <img src={Logo} alt={site.siteMetadata.title} />
          </Link>
          <Navigation menu={menu.menuItems.nodes} />
          {/* <MainMenu menu={menuItems} contact={contactPage} /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
