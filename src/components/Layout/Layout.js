import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import Header from "../Header/Header";
import OverlayMenu from "../OverlayMenu/OverlayMenu";
import Footer from "../Footer/Footer";
import { GlobalStyles, Primary } from "./Layout.styles";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleOverlayMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  );
}

export default Layout;
