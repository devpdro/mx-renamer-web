import { ReactNode } from "react"; // Importa o React e ReactNode
import * as S from "./rules-styles";

export type RulesVariants = "primary";

interface PAttributes {
  className?: string;
  onClick?: () => void;
}

export interface RulesProps extends PAttributes {
  variant?: RulesVariants;
  isVisible?: boolean;
  children: ReactNode;
}

const Rules = ({
  variant = "primary",
  isVisible = true,
  children,
  ...rest
}: RulesProps) => (
  <S.Container as="p" variant={variant} isVisible={isVisible} {...rest}>
    {children}
  </S.Container>
);

export default Rules;
