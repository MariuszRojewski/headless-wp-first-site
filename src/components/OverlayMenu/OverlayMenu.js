import React from "react";
import { Link } from "gatsby";
import InvertedLogo from "../../images/logo-inverted.svg";
import CloseButton from "../../images/close_btn.svg";
import useMenuQuery from "../../hooks/useMenuQuery";
import { OverlayWrapper } from "./OverlayMenu.styles";

function OverlayMenu({ menuOpen, callback }) {
  console.log("menuOpen: ", menuOpen);
  console.log("callBack: ", callback);

  const { menu } = useMenuQuery();
  return (
    <OverlayWrapper menuOpen={menuOpen}>
      <div className="inner">
        <img className="invertedLogo" src={InvertedLogo} alt="white-logo" />
        <ul className="overlayMenu">
          {menu.menuItems.nodes.map((item) =>
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeClassName="overlayActive">
                  {item.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </OverlayWrapper>
  );
}

export default OverlayMenu;
