import React from "react";
import { Link } from "gatsby";
import { Wrapper, Menu } from "./PostSidebar.styles";

import CategoryIcon from "../../images/category-svgrepo-com.svg";
import DateIcon from "../../images/date-svgrepo-com.svg";
import UserIcon from "../../images/user-5-svgrepo-com.svg";

function PostSidebar({ date, author, categories }) {
  return (
    <Wrapper>
      <Menu>
        <div className="sidebar-section">
          <img src={UserIcon} alt="" />
          <span>Author: {author}</span>
        </div>
        <div className="sidebar-section">
          <img src={DateIcon} alt="" />
          <span>Date: {date}</span>
        </div>
        <div className="sidebar-section">
          <img src={CategoryIcon} alt="" />
          <span>Categories</span>
        </div>
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
      </Menu>
    </Wrapper>
  );
}

export default PostSidebar;
