import { Button } from "../../Form";

import * as S from "./header-styles";

const Header = () => {
  return (
    <S.Container>
      <S.Version>
        <S.IconCircle />
        <p>
          <span>v1 :</span> Versão para desktop em desenvolvimento
        </p>
      </S.Version>
      <S.Information>
        <p>
          <S.IconCheck />
          Fácil de Usar
        </p>
        <p>
          <S.IconLock />
          Segurança de Dados
        </p>
        <p>
          <S.IconFire />
          Recursos Poderosos
        </p>
      </S.Information>
      <S.TitleBox>
        <h1>
          Ferramenta online para renomear arquivos <br /> em lote rapidamente
        </h1>
        <p>
          Sem login ou instalação, suporta grandes arquivos e oferece diversos{" "}
          <br />
          modos de renomeação em lote, com alta eficiência e conveniência.
        </p>
      </S.TitleBox>
      <S.ButtonBox>
        <Button>Usar agora</Button>
        <Button variant="secondary">Documentação</Button>
      </S.ButtonBox>
    </S.Container>
  );
};

export default Header;
