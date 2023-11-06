import React from "react";
import "../../style/AccordionAcf.scss";
import SingleAccordion from "./SingleAccordion";

const Accordion = ({ accordionBlocks }) => {
  const blocks = Object.values(accordionBlocks);

  if (blocks[0].title !== null && blocks[0].textArea !== "") {
    return (
      <div className="accordion">
        <h2 className="accordion-header">Accordion</h2>
        {blocks.map((block, index) => {
          return <SingleAccordion key={`block_${index + 1}`} {...block} />;
        })}
      </div>
    );
  }
};

export default Accordion;
