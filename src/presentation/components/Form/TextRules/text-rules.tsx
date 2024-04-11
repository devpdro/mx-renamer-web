import { ReactNode } from "react"; // Importa o React e ReactNode
import * as S from "./text-rules.styles";

export type TextVariants = "primary" | "secondary";

interface PAttributes {
  className?: string;
  onClick?: () => void;
}

export interface TextRulesProps extends PAttributes {
  variant?: TextVariants;
  isVisible?: boolean;
  children: ReactNode;
}

const TextRules = ({
  variant = "primary",
  isVisible = true,
  children,
  ...rest
}: TextRulesProps) => (
  <S.Container as="p" variant={variant} isVisible={isVisible} {...rest}>
    {children}
  </S.Container>
);

export default TextRules;
