import styled from "styled-components";

export const Wrapper = styled.header`
  background: #fdf3fa;
  height: 110px;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  z-index: 1000;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  img {
    width: 250px;
    margin: 0;
  }
`;
