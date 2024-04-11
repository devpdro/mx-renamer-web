import styled, { css } from "styled-components";

import { TextRulesProps } from "./text-rules";

const variants = {
  primary: css`
    color: ${({ theme }) => theme.colors.hoverButtonBlue};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-weight: ${({ theme }) => theme.fontWeight.default};
    border: ${({ theme }) => theme.colors.borderBlack};
    padding: 0.4rem 0.9rem;
  `,
};

export const Container = styled.button<TextRulesProps>`
  ${({ variant, isVisible }) => css`
    display: ${isVisible ? "block" : "none"};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    border: 0;
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
