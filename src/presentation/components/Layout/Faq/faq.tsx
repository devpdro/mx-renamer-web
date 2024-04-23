import { useState } from "react";

import { FaqData } from "../../../../providers";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import * as S from "./faq-styles";

const Faq = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>(Array(4).fill(false));

  const toggleOpen = (index: number) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

  return (
    <S.Container>
      <h1>Perguntas <span>frequentes</span></h1>
      <div>
        {FaqData.map((item, index) => (
          <S.FaqItem key={index}>
            <div onClick={() => toggleOpen(index)}>
              <h5>{`${item.title}`}</h5>
              {isOpen[index] ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div>{isOpen[index] && <p>{item.description}</p>}</div>
          </S.FaqItem>
        ))}
      </div>
    </S.Container>
  );
};

export default Faq;
