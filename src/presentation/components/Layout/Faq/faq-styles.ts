import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  h1 {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
    span {
      border-bottom: 4px solid #3255eb;
    }
    @media (max-width: 820px) {
      font-size: 1.8rem;
      text-align: left;
    }
  }
`;

export const FaqItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    h5 {
      font-weight: 500;
      font-size: 1.4rem;
      @media (max-width: 820px) {
        font-size: 1.2rem;
      }
    }
    p {
      color: ${({ theme }) => theme.colors.mediumGray};
      font-size: 1.2rem;
      line-height: 1.8rem;
      @media (max-width: 820px) {
        font-size: 1.1rem;
      }
    }
  }
`;
