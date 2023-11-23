import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import { nanoid } from "nanoid";
import { IoMdArrowDropdown } from "react-icons/io";

// Zadania do zrobienia w obszarze tego komponentu.
// - problemy z ustawieniem koloru na przycisku, czyli elemencie li nie będącym
//   linkime, stan przypisuje się dopiero po drugim kliknięciu, a ni tak powinno
//   to działac, całosc chyba będzie potrzebowac localStorage, a nie jestem pewien

const MainMenu = ({ menu, contact }) => {
  const [isChildActive, setIsChildActive] = React.useState(false);
  const menuItems = React.useMemo(() => menu || [], [menu]);
  const contactPage = contact || null;
  const [activeChildForButton, setActiveChildForButton] = React.useState(null);

  const checkIfChildActive = React.useCallback(() => {
    return menuItems.some((menuItem) => {
      const postOrPageSubMenuItems = menuItem.subMenuItems;
      return postOrPageSubMenuItems?.some(
        (childItem) =>
          childItem.selectPageOrPost?.uri === window.location.pathname
      );
    });
  }, [menuItems]);

  React.useEffect(() => {
    setIsChildActive(checkIfChildActive());
  }, [checkIfChildActive]);

  React.useEffect(() => {
    if (isChildActive) {
      // Pobierz pierwszy aktywny element podmenu
      const activeChildItem = menuItems.find((menuItem) => {
        return menuItem.subMenuItems?.some(
          (childItem) =>
            childItem.selectPageOrPost?.uri === window.location.pathname
        );
      });
      if (activeChildItem) {
        setActiveChildForButton(activeChildItem.parentItem.label);
      } else {
        setActiveChildForButton(null);
      }
    }
  }, [isChildActive, menuItems]);

  const handleAddClass = (e) => {
    const getParentClass = e.target.closest(".parent");
    getParentClass?.classList.add("mm-active");

    if (getParentClass) {
      const getSubmenu = getParentClass.querySelector(".submenu");
      getSubmenu.classList.add("mm-show");
    }
  };

  const handleRemoveClass = (e) => {
    const getParentClass = e.target.closest(".parent");
    getParentClass?.classList.remove("mm-active");

    if (getParentClass) {
      const getSubmenu = getParentClass.querySelector(".submenu");
      getSubmenu.classList.remove("mm-show");
    }
  };

  if (!menuItems.length) {
    return null;
  }

  return (
    <nav className="main-menu">
      <ul className="navigation">
        {menuItems.map((menuItem) => {
          const parentItemName = menuItem.parentItem.label;
          // const parentItemId = menuItem.parentItem.selectPageOrPost?.id;
          const parentItemUrl = menuItem.parentItem.selectPageOrPost?.uri;
          const postOrPageSubMenuItems = menuItem.subMenuItems;
          const selectedCategories = menuItem.selectedCategories;

          // Sprawdzamy, czy jakiekolwiek dziecko jest aktywne dla tego konkretnego rodzica
          function checkWhatPArentIsActive() {
            if (
              selectedCategories !== null &&
              selectedCategories.length !== 0
            ) {
              return selectedCategories?.some(
                (childItem) => childItem.uri === window.location.pathname
              );
            }

            if (
              postOrPageSubMenuItems !== null &&
              postOrPageSubMenuItems.length !== 0
            ) {
              return (
                isChildActive &&
                postOrPageSubMenuItems?.some(
                  (childItem) =>
                    childItem.selectPageOrPost?.uri === window.location.pathname
                )
              );
            }
          }

          let isParentActive = checkWhatPArentIsActive();

          return (
            <li
              key={parentItemUrl || nanoid()}
              className={`level-1 ${
                postOrPageSubMenuItems ? "parent" : "item"
              }${isParentActive ? " child-selected" : ""}`}
            >
              {parentItemUrl ? (
                <>
                  <Link
                    to={parentItemUrl}
                    className={
                      isParentActive
                        ? "filled-link child-selected"
                        : "filled-link"
                    }
                    onMouseEnter={handleAddClass}
                    onMouseLeave={handleRemoveClass}
                  >
                    {parentItemName ? parentItemName : ""}

                    {postOrPageSubMenuItems !== null &&
                      postOrPageSubMenuItems.length !== 0 && (
                        <IoMdArrowDropdown className="menu-arrow-down" />
                      )}
                  </Link>
                  {postOrPageSubMenuItems !== null &&
                  postOrPageSubMenuItems.length !== 0 ? (
                    <ul
                      className="submenu"
                      onMouseEnter={handleAddClass}
                      onMouseLeave={handleRemoveClass}
                    >
                      {postOrPageSubMenuItems.map((childItem) => {
                        const childItemPostOrPage = childItem.selectPageOrPost;

                        return (
                          <li
                            key={
                              childItemPostOrPage !== null
                                ? childItemPostOrPage.id
                                : nanoid()
                            }
                          >
                            {childItemPostOrPage !== null && (
                              <Link
                                to={childItemPostOrPage.uri}
                                activeClassName="nav-active"
                              >
                                {childItem.label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </>
              ) : (
                // Użycie <Link/> w tym miejscu powoduje migotanie nawigacji
                // W przyszłosci możesz się z tym pobawiac, jak będzie czas
                // na teraz jakoś chodzi. Linik nie zadziała tylko dla kategorii
                // cała reszta działa poprawnie.
                <>
                  <button
                    className={`blank-link ${
                      isParentActive
                        ? "filled-link child-selected"
                        : "filled-link"
                    }`}
                    onMouseEnter={handleAddClass}
                    onMouseLeave={handleRemoveClass}
                  >
                    {parentItemName ? parentItemName : ""}
                    {selectedCategories !== null &&
                      selectedCategories.length !== 0 && (
                        <IoMdArrowDropdown className="menu-arrow-down" />
                      )}
                  </button>

                  {/* Submenu */}
                  {selectedCategories !== null &&
                  selectedCategories.length !== 0 ? (
                    <ul className="submenu">
                      {selectedCategories.map((childItem) => {
                        const childItemCategory = childItem;

                        return (
                          <li
                            key={
                              childItemCategory !== null
                                ? childItemCategory.id
                                : nanoid()
                            }
                          >
                            {childItemCategory !== null && (
                              <Link
                                to={childItemCategory.uri}
                                activeClassName="nav-active"
                                onClick={() =>
                                  setActiveChildForButton(parentItemName)
                                }
                              >
                                {childItemCategory.name}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </>
              )}
            </li>
          );
        })}
        {contactPage && (
          <li key={nanoid()} className="level-1">
            <Link to={contactPage.destination.uri} activeClassName="nav-active">
              {contactPage.label ? contactPage.label : ""}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainMenu;
