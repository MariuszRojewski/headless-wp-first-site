import React from "react";
import { Link } from "gatsby";
import PageIcon from "../../images/page-icon.svg";
import { Wrapper, Menu } from "./ArchiveSidebar.styles";

function ArchiveSidebar({ catId, categories }) {
  console.log("CAT ID: ", categories);
  const sorttedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === "all-posts") return -1;
    if (y.node.slug === "all-posts") return 1;
    return 0;
  });

  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-menu-header">
          <img src={PageIcon} />
          <span>Posts</span>
        </li>
        {sorttedCategories.map((category) => {
          if (category.node.count !== 0) {
            return category.node.slug !== "uncategorized" ? (
              <li key={category.node.id}>
                <span className="count">{category.node.count}</span>
                <Link
                  to={category.node.uri}
                  activeClassName="sidebar-highlighted"
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: category.node.name }}
                  />
                </Link>
              </li>
            ) : null;
          }
          return null;
        })}
      </Menu>
    </Wrapper>
  );
}

export default ArchiveSidebar;
