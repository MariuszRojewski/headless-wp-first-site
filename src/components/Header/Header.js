import React from "react";
import { Link } from "gatsby";
import Navigation from "../Navigation/Navigation";
import useMenuQuery from "../../hooks/useMenuQuery";

import Logo from "../../images/logo-emigowy.png";
import { Wrapper, Content } from "./Header.styles";

function Header() {
  const { site, menu } = useMenuQuery();

  return (
    <div>
      <Wrapper>
        <Content>
          <Link to="/">
            <img src={Logo} alt={site.siteMetadata.title} />
          </Link>
          <Navigation menu={menu.menuItems.nodes} />
        </Content>
      </Wrapper>
    </div>
  );
}

export default Header;
