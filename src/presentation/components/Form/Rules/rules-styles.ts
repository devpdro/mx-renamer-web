import styled, { css } from "styled-components";

import { RulesProps } from "./rules";

const variants = {
  primary: css`
    color: ${({ theme }) => theme.colors.hoverButtonBlue};
    font-weight: ${({ theme }) => theme.fontWeight.default};
    font-size: 1.2rem;
    padding: 0.3rem 0.8rem 0.3rem 0;
    @media (max-width: 820px) {
      font-size: 1.13rem;
    }
  `,
};

export const Container = styled.button<RulesProps>`
  ${({ variant, isVisible }) => css`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    display: ${isVisible ? "block" : "none"};
    cursor: pointer;
    border: 0;
    transition: background-color 0.2s;

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
