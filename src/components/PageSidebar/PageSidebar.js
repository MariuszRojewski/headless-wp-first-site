import React from "react";
import { Link } from "gatsby";
import SidebarMessage from "../SidebarMessage/SidebarMessage";
import PageIcon from "../../images/page-icon.svg";
import { Wrapper, Menu } from "./PageSidebar.styles";

function PageSidebar({ sidebar }) {
  const firstParentId = sidebar.parentId === null && sidebar.id;
  const pageData = sidebar.parentId
    ? sidebar.allPages.find((node) => node.id === sidebar.parentId)
    : null;

  function sidebarNavigation() {
    if (firstParentId) {
      const firstParentNodes = sidebar.allPages.find(
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
            console.log("CHILD: ", child);

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
            console.log("CHILD: ", child);

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
        {sidebar.parentId === null && sidebar.wpChildren.nodes.length === 0 ? (
          <SidebarMessage />
        ) : (
          sidebarNavigation()
        )}
      </Menu>
    </Wrapper>
  );
}

export default PageSidebar;
