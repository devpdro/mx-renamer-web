import { useState, ReactNode } from "react";

import { FileExtension, Ordering, Wrapper } from "./components";

import * as S from "./rule-manager";

const RuleManager = () => {
  const [content, setContent] = useState<ReactNode | null>(null); // Definindo o tipo inicial como ReactNode ou null

  const handleButtonClick = () => {
    setContent(
      <>
        <h1>Alterar para:</h1>
        <input type="text" name="" id="" />
        <h1>Maiúsculas e minúsculas :</h1>
        <select name="" id="">
          Converter para maisculas
        </select>
        <select name="" id="">
          Converter para minusculas
        </select>
      </>
    );
  };

  const handleButtonClickOrdem = () => {
    setContent(<>ordering</>);
  };
  return (
    <>
      <S.Container>
        <FileExtension onButtonClick={handleButtonClick} />
        <Ordering onButtonClick={handleButtonClickOrdem} />
        <Ordering onButtonClick={handleButtonClickOrdem} />
        <Ordering onButtonClick={handleButtonClickOrdem} />
        <Ordering onButtonClick={handleButtonClickOrdem} />
        <Ordering onButtonClick={handleButtonClickOrdem} />
        <Ordering onButtonClick={handleButtonClickOrdem} />
        <Ordering onButtonClick={handleButtonClickOrdem} />
        <FileExtension onButtonClick={handleButtonClick} />
        <Ordering onButtonClick={handleButtonClickOrdem} />
        <Ordering onButtonClick={handleButtonClickOrdem} />{" "}
        <FileExtension onButtonClick={handleButtonClick} />
      </S.Container>
      <Wrapper content={content}></Wrapper>
    </>
  );
};

export default RuleManager;
