import React from "react";
import { Link } from "gatsby";
import SidebarMessage from "../SidebarMessage/SidebarMessage";
import PageIcon from "../../images/page-icon.svg";
import { Wrapper, Menu } from "./PageSidebar.styles";

function PageSidebar({ sidebar }) {
  const firstParentId = sidebar.wpPage.parentId === null && sidebar.wpPage.id;
  const pageData = sidebar.wpPage.parentId
    ? sidebar.allWpPage.nodes.find(
        (node) => node.id === sidebar.wpPage.parentId
      )
    : null;

  console.log("firstParentId: ", firstParentId);
  console.log("pageData: ", pageData);

  function sidebarNavigation() {
    if (firstParentId) {
      const firstParentNodes = sidebar.allWpPage.nodes.find(
        (node) => node.id === firstParentId
      );

      const firstParentNodesSort = [
        ...firstParentNodes.wpChildren.nodes,
      ].reverse();

      return (
        <>
          <li className="sidebar-menu-header">
            <img src={PageIcon} alt="CakeIt Page" />
            <span
              dangerouslySetInnerHTML={{ __html: firstParentNodes.title }}
            />
          </li>
          {firstParentNodesSort.map((child) => {
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
      const pageDataSort = [...pageData.wpChildren.nodes].reverse();
      return (
        <>
          <li className="sidebar-menu-header">
            <img src={PageIcon} alt="CakeIt Page" />
            <span dangerouslySetInnerHTML={{ __html: pageData.title }} />
          </li>
          {pageDataSort.map((child) => {
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
