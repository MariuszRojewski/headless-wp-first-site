import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const SingleAccordion = ({ title, textArea }) => {
  const [isActive, setIsActive] = React.useState(false);

  const AccordionToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <article className="accordion-item">
      <div className="accordion-item-head" onClick={AccordionToggle}>
        <h2 className="title">{title}</h2>
        {isActive ? (
          <SlArrowUp className="icon" />
        ) : (
          <SlArrowDown className="icon" />
        )}
      </div>
      <p className={`text ${!isActive && "hidden"}`}>{textArea}</p>
    </article>
  );
};

export default SingleAccordion;
