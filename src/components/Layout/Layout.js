import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import Header from "../Header/Header";
import OverlayMenu from "../OverlayMenu/OverlayMenu";
import Footer from "../FooterComponent/Footer";
import "../../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleOverlayMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
