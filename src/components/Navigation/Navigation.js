import React from "react";
import { Link } from "gatsby";
import { NavigationWrapper } from "./Navigation.styles";
import { IoMdArrowDropdown } from "react-icons/io";

function activateParentLinks(element) {
  if (element) {
    const parentLi = element.closest(".submenu");
    if (parentLi) {
      const parentLiHref = parentLi.parentElement.querySelector(".nav-to");
      if (parentLiHref) {
        console.log("parentLiHref: ", parentLiHref);
        parentLiHref.classList.add("nav-active");
        activateParentLinks(parentLiHref);
      }
    }
  }
}

function renderSubMenu(childItems, level) {
  if (childItems.length === 0 || level > 8) {
    return null;
  }

  return (
    <ul className={`submenu level-${level}`}>
      {childItems.map((childItem) => (
        <li key={childItem.id} className="nav-item">
          <Link
            to={childItem.url}
            className="nav-to"
            activeClassName="nav-active"
          >
            {childItem.label}
            {childItem.childItems.nodes.length > 0 && (
              <IoMdArrowDropdown className="menu-arrow-down" />
            )}
          </Link>
          {renderSubMenu(childItem.childItems.nodes, level + 1)}
        </li>
      ))}
    </ul>
  );
}

function Navigation({ menu }) {
  React.useEffect(() => {
    const activeElement = document.querySelector(".nav-active");
    activateParentLinks(activeElement);
  }, []); // Run the effect only once after the initial render

  return (
    <NavigationWrapper>
      <ul>
        {menu.map((mainItem) =>
          !mainItem.parentId ? (
            <li key={mainItem.id} className="nav-item">
              <Link
                to={mainItem.url}
                className="nav-to"
                activeClassName="nav-active"
              >
                {mainItem.label}
                {mainItem.childItems.nodes.length !== 0 && (
                  <IoMdArrowDropdown className="menu-arrow-down" />
                )}
              </Link>
              {renderSubMenu(mainItem.childItems.nodes, 2)}
            </li>
          ) : null
        )}
      </ul>
    </NavigationWrapper>
  );
}

export default Navigation;
