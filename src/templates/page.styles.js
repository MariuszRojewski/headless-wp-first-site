import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: flex;
  }
`;

export const PageContent = styled.article`
  margin-top: 20px;
  width: 100%;
`;
