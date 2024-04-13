import { useState } from "react";

import { Button } from "../../Form";

import * as S from "./navbar-styles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleIconClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.Container>
      <S.TitleBox>
        <S.Logo>MX Renamer</S.Logo>
        <S.Icon onClick={handleIconClick} />
      </S.TitleBox>
      <S.Navbox active={menuOpen}>
        <S.List>
          <S.Link activeClassName="active">Guia de uso</S.Link>
          <S.Link activeClassName="active">Experimente agora</S.Link>
          <S.Link activeClassName="active">Perguntas frequentes</S.Link>
          <Button>Baixar</Button>
        </S.List>
      </S.Navbox>
    </S.Container>
  );
};

export default Navbar;
