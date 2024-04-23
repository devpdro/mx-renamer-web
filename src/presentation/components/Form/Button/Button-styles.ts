import styled, { css } from "styled-components";

import { ButtonProps } from "./Button";

const variants = {
  primary: css`
    color: ${({ theme }) => theme.colors.blue};
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    padding: 0.6rem 1.4rem;
    margin-left: 0.15rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverButtonBlue};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border: ${({ theme }) => theme.colors.borderBlack};
    padding: 0.6rem 1.4rem;
    margin: 0 0 0 1rem;

    &:hover {
      border: ${({ theme }) => theme.colors.hoverButtonWhite};
      background-color: ${({ theme }) => theme.colors.hoverButtonWhite};
    }
  `,
  tertiary: css`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border: ${({ theme }) => theme.colors.borderBlack};
    padding: 0.6rem 1.4rem;
    @media (max-width: 820px) {
      padding: 0.6rem 0.8rem;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverButtonBlue};
    }
  `,
  quartinary: css`
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border: ${({ theme }) => theme.colors.borderBlack};
    padding: 0.6rem 1.4rem;
    margin: 0 1rem;
    @media (max-width: 820px) {
      padding: 0.6rem 0.8rem;
    }
    &:hover {
      border: ${({ theme }) => theme.colors.hoverButtonWhite};
      background-color: ${({ theme }) => theme.colors.hoverButtonWhite};
    }
  `,

  quintary: css`
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border: ${({ theme }) => theme.colors.borderBlack};
    padding: 0.6rem 1.4rem;
    margin: 0 1rem 0 0;
    @media (max-width: 820px) {
      padding: 0.6rem 0.8rem;
    }
    &:hover {
      border: ${({ theme }) => theme.colors.hoverButtonWhite};
      background-color: ${({ theme }) => theme.colors.hoverButtonWhite};
    }
  `,
};

export const Container = styled.button<ButtonProps>`
  ${({ variant, isVisible }) => css`
    display: ${isVisible ? "block" : "none"};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    border: 0;
    border-radius: 10px;
    transition: background-color 0.2s;
    cursor: pointer;

    -webkit-box-pack: center;
    justify-content: center;
    transition: all 0.3s ease;

    ${variant && variants[variant]}

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`;
