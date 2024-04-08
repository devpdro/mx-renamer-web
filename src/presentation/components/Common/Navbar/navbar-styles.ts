import styled from "styled-components";

export const Container = styled.nav`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.5rem;
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleBox = styled.div`
  padding: 0 1rem 0 0;
  h1 {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
export const LinksBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 35px;
  padding: 1rem 1.5rem;
  margin: 0 4rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0 0.5rem;
    li {
      font-size: ${({ theme }) => theme.fontSizes.default};
      padding: 0 1rem;
    }
  }
`;
