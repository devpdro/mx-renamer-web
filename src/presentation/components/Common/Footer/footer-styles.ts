import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.hoverButtonBlue};
  margin-top: 2.8rem;
  padding: 2rem 2rem 2rem 2rem;
  @media (max-width: 720px) {
    margin-top: 1.3rem
    }
  h1 {
    text-align: center;
    color: #e1e1e6;
    font-size: 1rem;
    font-weight: 400;
    @media (max-width: 720px) {
      font-size: 0.97rem;
    }
  }
`;
