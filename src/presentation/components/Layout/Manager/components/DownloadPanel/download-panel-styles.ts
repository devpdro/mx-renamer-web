import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 820px) {
    display: block;
  }
`;

export const BoxStatistics = styled.div`
  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
