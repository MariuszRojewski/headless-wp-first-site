import styled from "styled-components";

export const WrapperAbc = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1180px;
  margin: 0 auto;
  margin: 20px auto 30px auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
