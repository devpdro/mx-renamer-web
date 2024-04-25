import styled from "styled-components";

export const Container = styled.nav`
  // border-bottom: 1px solid rgba(202, 202, 205, 1);  
  border: 1px solid rgba(28, 28, 28, 0.25);
`;

export const BoxContainer = styled.div`
  max-width: 1315px;
  margin: 0 auto;
  padding: 2rem 3rem;
  @media (max-width: 1080px) {
    padding: 1rem 1.5rem;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};

  @media (max-width: 1080px) {
    margin: 0.8rem 0;
    padding-left: 0.15rem;
  }
`;
