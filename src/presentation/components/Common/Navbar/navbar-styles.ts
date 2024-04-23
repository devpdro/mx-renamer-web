import styled from "styled-components";

import { IoIosMenu } from "react-icons/io";

interface NavBoxProps {
  active?: boolean;
}

interface LinkProps {
  activeClassName?: string;
}

export const Container = styled.nav`
  border-bottom: 2px solid ${({ theme }) => theme.colors.hoverButtonBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;

  @media (max-width: 1080px) {
    display: block;
    padding: 1.2rem 1.5rem;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};

  @media (max-width: 1080px) {
    margin: 0.9rem 0;
    padding-left: 0.15rem;
  }
`;

export const Icon = styled(IoIosMenu)`
  font-size: 2.2rem;
  display: none;

  cursor: pointer;

  @media (max-width: 1080px) {
    display: block;
    margin-right: 0.15rem;
  }
  @media (min-width: 1081px) {
    display: none;
  }
`;

export const Navbox = styled.div<NavBoxProps>`
  @media (max-width: 1080px) {
    display: ${(props) => (props.active ? "block" : "none")};
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Link = styled.li<LinkProps>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  display: inline;
  padding: 0 2.5rem 0 0;
  transition: 0.2s ease;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.hoverButtonBlue};
    background-color: #3d61ff;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
    margin: 0 0 1.2rem 0;
    padding: 0.6rem 1rem 0.6rem 1rem;
  }
`;
