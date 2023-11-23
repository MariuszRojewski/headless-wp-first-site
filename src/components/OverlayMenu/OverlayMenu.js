import React from "react";
import { Link } from "gatsby";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from "../../images/mobile-logo.png";
import CloseButton from "../../images/close_btn.svg";
import useMenuQuery from "../../hooks/useMenuQuery";
import { OverlayWrapper, NavigationWrapper } from "./OverlayMenu.styles";

function activateParentLinks(element) {
  if (element) {
    const parentLi = element.closest ? element.closest(".submenu") : null;
    if (parentLi) {
      const parentLiHref =
        parentLi.parentElement.querySelector(".mobile-nav-to");
      if (parentLiHref) {
        parentLiHref.classList.add("mobile-nav-active");
        activateParentLinks(parentLiHref);
      }
    }
  }
}

function OverlayMenu({ menuOpen, callback }) {
  const menuData = useMenuQuery();
  const menu = menuData.menu.menuItems.nodes;
  const [openSubMenus, setOpenSubMenus] = React.useState({});

  React.useEffect(() => {
    const activeElement = document.querySelector(
      ".mobile-menu .mobile-nav-active"
    );

    if (openSubMenus)
      if (activeElement) {
        activateParentLinks(activeElement);
      }
  }, [menuOpen]);

  const handleToggleSubmenu = (e) => {
    const parentItem = e.target.closest(".first-item");
    setOpenSubMenus((prevItem) => {
      if (prevItem && prevItem !== parentItem && prevItem instanceof Element) {
        const prevOpenSubmenu = prevItem.querySelectorAll(".mm-show");
        prevOpenSubmenu.forEach((item) => {
          item.classList.remove("mm-show");
        });
      }
      return parentItem;
    });

    const navItem = e.target.closest(".mobile-nav-item");
    const navitemSubmenu = navItem.querySelector(".submenu");
    if (navitemSubmenu.classList.contains("mm-show")) {
      navitemSubmenu.classList.remove("mm-show");
    } else {
      navitemSubmenu.classList.add("mm-show");
    }
  };

  const renderSubMenu = (childItems, level) => (
    <ul className={`submenu level-${level}`} level={level}>
      {childItems.map((childItem) => (
        <li key={childItem.id} className="mobile-nav-item">
          <div className="head">
            <Link
              to={childItem.url}
              className="mobile-nav-to"
              activeClassName="mobile-nav-active"
              onClick={() => activateParentLinks(childItem)}
            >
              {childItem.label}
            </Link>
            {childItem.childItems.nodes.length > 0 && (
              <IoMdArrowDropdown
                className="menu-arrow-down"
                onClick={(e) => handleToggleSubmenu(e)}
              />
            )}
          </div>
          {/* {openSubMenus[childItem.id] &&
            renderSubMenu(childItem.childItems.nodes, level + 1)} */}
          {/* {renderSubMenu(childItem.childItems.nodes, level + 1)} */}
          {childItem.childItems.nodes.length > 0
            ? renderSubMenu(childItem.childItems.nodes, level + 1)
            : ""}
        </li>
      ))}
    </ul>
  );

  return (
    <OverlayWrapper menuOpen={menuOpen}>
      <div className="inner">
        <img className="logo" src={Logo} alt="white-logo" />
        <NavigationWrapper>
          <ul className="mobile-menu">
            {menu.map((mainItem) =>
              !mainItem.parentId ? (
                <li key={mainItem.id} className="mobile-nav-item first-item">
                  <div className="head">
                    <Link
                      to={mainItem.url}
                      className="mobile-nav-to"
                      activeClassName="mobile-nav-active"
                      onClick={() => activateParentLinks(mainItem)}
                    >
                      {mainItem.label}
                    </Link>
                    {mainItem.childItems.nodes.length !== 0 && (
                      <IoMdArrowDropdown
                        className="menu-arrow-down"
                        onClick={(e) => handleToggleSubmenu(e)}
                      />
                    )}
                  </div>
                  {/* {openSubMenus[mainItem.id] &&
                    renderSubMenu(mainItem.childItems.nodes, 2)} */}
                  {/* {renderSubMenu(mainItem.childItems.nodes, 2)} */}
                  {mainItem.childItems.nodes.length > 0
                    ? renderSubMenu(mainItem.childItems.nodes, 2)
                    : ""}
                </li>
              ) : null
            )}
          </ul>
        </NavigationWrapper>
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
