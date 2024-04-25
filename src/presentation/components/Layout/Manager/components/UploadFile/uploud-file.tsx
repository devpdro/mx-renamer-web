import { HandleDrop, FileActions } from "../../../../../../utils";
import { Button } from "../../../../Form";

import * as S from "./uploud-file-styles";

const UploudFile = () => {
  const { handleButtonFile, handleButtonFolder } = FileActions();
  const { handleDrop } = HandleDrop();

  return (
    <S.Container onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <S.BoxContainer>
        <S.IconBox>
          <S.Icon />
        </S.IconBox>
        <S.ButtonBox>
          <Button onClick={handleButtonFile} variant="tertiary">
            Selecionar arquivo(s)
          </Button>
          <Button onClick={handleButtonFolder} variant="quartinary">
            Selecionar pasta(s)
          </Button>
        </S.ButtonBox>
        <S.TextBox>
          <p>
            Clique no botão para carregar os arquivos ou arraste os arquivos
            para a página
          </p>
        </S.TextBox>
      </S.BoxContainer>
    </S.Container>
  );
};

export default UploudFile;
