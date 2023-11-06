import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

// Dziei destrukturyzacji będziem y mogli się pozbyć długiego
// odwołania do block atributtes - block.attributes
// Destrukturyzujemy rtównież "children", czyli całą resztę
// elementów z pochodzoacych z MediaText Component
export const MediaText = ({
  style,
  className,
  mediaPosition,
  gatsbyImage,
  children,
}) => {
  const content = (
    <ContentStyled>
      <div>{children}</div>
    </ContentStyled>
  );
  return (
    <div className="wielka-ogromna-gigantyczna-dupaaaaaaaaaaaaaaa">
      <div className={className} style={style}>
        {mediaPosition === "right" && content}
        <FigureStyled>
          <GatsbyImage alt="" image={gatsbyImage} />
        </FigureStyled>
        {mediaPosition !== "right" && content}
      </div>
    </div>
  );
};

const ContentStyled = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  justify-items: center;
`;

const FigureStyled = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100% !important;
  width: 100% !important;
`;
