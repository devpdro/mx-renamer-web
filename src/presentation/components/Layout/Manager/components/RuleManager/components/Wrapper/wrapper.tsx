import * as S from "./wrapper-styles";

interface WrapperProps {
  content: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ content }) => {
  return <S.Container>{content}</S.Container>;
};

export default Wrapper;
