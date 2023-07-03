import React from "react";
import { Link } from "gatsby";
import SidebarMessage from "../SidebarMessage/SidebarMessage";
import PageIcon from "../../images/page-icon.svg";
import { Wrapper, Menu } from "./PageSidebar.styles";

function PageSidebar({ sidebar }) {
  console.log("sidebar: ", sidebar);
  console.log(sidebar.wpPage.wpChildren.nodes.length);

  const firstParentId = sidebar.wpPage.parentId === null && sidebar.wpPage.id;
  const pageData = sidebar.wpPage.parentId
    ? sidebar.allWpPage.nodes.find(
        (node) => node.id === sidebar.wpPage.parentId
      )
    : null;

  function sidebarNavigation() {
    // Sprawdzamy, czy to ejst pierwszy elelment nawigacji (kategoria rodzic)
    // jeśli tak, to nie robimy zaznaczenia w submenu, jeśli nie to dodajemy
    // klasę w dzieciach o nazwie "sidebar-highlighted"

    if (firstParentId) {
      const firstParentNodes = sidebar.allWpPage.nodes.find(
        (node) => node.id === firstParentId
      );

      return (
        <>
          <li className="sidebar-menu-header">
            <img src={PageIcon} alt="CakeIt Page" />
            <span
              dangerouslySetInnerHTML={{ __html: firstParentNodes.title }}
            />
          </li>
          {firstParentNodes.wpChildren.nodes.map((child) => {
            console.log(child);
            return (
              <li key={child.id}>
                <Link to={child.uri}>
                  <span dangerouslySetInnerHTML={{ __html: child.title }} />
                </Link>
              </li>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          <li className="sidebar-menu-header">
            <img src={PageIcon} alt="CakeIt Page" />
            <span dangerouslySetInnerHTML={{ __html: pageData.title }} />
          </li>
          {pageData.wpChildren.nodes.map((child) => {
            console.log(child);
            return (
              <li key={child.id}>
                <Link to={child.uri} activeClassName="sidebar-highlighted">
                  <span dangerouslySetInnerHTML={{ __html: child.title }} />
                </Link>
              </li>
            );
          })}
        </>
      );
    }
  }

  return (
    <Wrapper>
      <Menu>
        {sidebar.wpPage.parentId === null &&
        sidebar.wpPage.wpChildren.nodes.length === 0 ? (
          <SidebarMessage />
        ) : (
          sidebarNavigation()
        )}
      </Menu>
    </Wrapper>
  );
}

export default PageSidebar;
