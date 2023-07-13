import React from "react";
import useCustomText from "../../hooks/useCustomText";
import { Wrapper, Content } from "./CustomText.styles";

function Quote() {
  const data = useCustomText();

  return (
    <Wrapper>
      <Content>
        <p>{data.wpPage.ACF_HomePage.customTextArea}</p>
      </Content>
    </Wrapper>
  );
}

export default Quote;
