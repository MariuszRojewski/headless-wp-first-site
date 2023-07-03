import React from "react";
import { Link } from "gatsby";
import { Wrapper, Menu } from "./PostSidebar.styles";

function PostSidebar({ date, author, categories }) {
  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-section">
          <span>Author: {author}</span>
        </li>
        <li className="sidebar-section">
          <span>Date: {date}</span>
        </li>
        <li className="sidebar-section">
          <span>Categories</span>
          <ul>
            {categories.map((category) => {
              return category.slug !== "all-post" ? (
                <li key={category.id}>
                  <Link to={category.uri}>
                    <span dangerouslySetInnerHTML={{ __html: category.name }} />
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </li>
      </Menu>
    </Wrapper>
  );
}

export default PostSidebar;
