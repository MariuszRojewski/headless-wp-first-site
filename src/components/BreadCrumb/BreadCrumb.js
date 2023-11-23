import React from "react";
import { Link } from "gatsby";
import { Wrapper } from "./BreadCrumb.styles";

function BreadCrumb({ crumb, forcedCrumb }) {
  if (forcedCrumb !== undefined) {
    return (
      <Wrapper>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span className="divider">/</span>
        <Link to={forcedCrumb.uri}>
          <span>{forcedCrumb.title}</span>
        </Link>
      </Wrapper>
    );
  } else {
    const parentPageData = crumb.parentId
      ? crumb.allPages.find((node) => node.id === crumb.parentId)
      : null;

    console.log("THE FUCKING CRUMB: ", crumb);

    // Breadcrumbsy przygotowane dla Page z Categorią
    if (parentPageData !== null) {
      return (
        <Wrapper>
          <Link to="/">
            <span>Home</span>
          </Link>
          <span className="divider">/</span>
          {parentPageData.id ? (
            <Link to={parentPageData.uri}>
              <span>{parentPageData.title}</span>
            </Link>
          ) : null}
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Link to="/">
            <span>Home</span>
          </Link>
          <span className="divider">/</span>
          <Link to={crumb.uri}>
            <span>{crumb.title}</span>
          </Link>
        </Wrapper>
      );
    }
  }
}

export default BreadCrumb;
