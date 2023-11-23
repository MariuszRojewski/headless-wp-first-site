import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 1440px) {
    padding: 20px 30px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BannerWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 300px;

  .banner-shadow {
    width: 100%;
    height: 100%;
    position: absolute;

    background-image: linear-gradient(
      90deg,
      rgba(12, 11, 59, 0.6) 0%,
      rgba(12, 11, 59, 0.45) 50%,
      rgba(12, 11, 59, 0.3) 100%
    );
  }

  .container {
    height: 100%;
  }
`;

export const PageContent = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 1023px) {
    display: flex;
    order: 0;
  }

  h1 {
    font-size: 2.8rem;
    margin-top: 0;
  }

  h2 {
    font-size: calc(2.5rem * 1.5); /* np. 3.75rem */
  }

  h3 {
    font-size: calc(2.5rem * 1.5 * 1.5); /* np. 5.625rem */
  }

  h4 {
    font-size: calc(2.5rem * 1.5 * 1.5 * 1.5); /* np. 8.4375rem */
  }

  h5 {
    font-size: calc(2.5rem * 1.5 * 1.5 * 1.5 * 1.5); /* np. 12.65625rem */
  }

  h6 {
    font-size: calc(
      2.5rem * 1.5 * 1.5 * 1.5 * 1.5 * 1.5
    ); /* np. 18.984375rem */
  }

  /* Style gdy jest Sidebar */
  ${({ hasSidebar }) =>
    hasSidebar &&
    `
    /* Twoje style dla przypadku z Sidebar */
    /* Na przykład: */
    .has-global-padding  {
      padding: 0px !important;
      width: 100%;
    }

    .has-global-padding p {
      width: 100%;  
      max-width: 100%;
    }

    .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
      max-width: 100%;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  `}

  .email-submited {
    background-color: rgb(41, 103, 219);
    color: white;
    font-weight: 600;
    margin-top: 40px;
    padding: 10px 25px;
    text-align: center;
    width: 100%;
    border-radius: 15px;
  }
`;
