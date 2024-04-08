import { Button } from "../../Form";

import * as S from "./navbar-styles";

const Navbar = () => {
  return (
    <S.Container>
      <S.NavBox>
        <S.TitleBox>
          <h1>MX Renamer</h1>
        </S.TitleBox>
        <S.LinksBox>
          <ul>
            <li>Home</li>
            <li>Versões</li>
            <li>FAQ</li>
            <li>Documentação</li>
          </ul>
        </S.LinksBox>
      </S.NavBox>
      <Button>Download</Button>
    </S.Container>
  );
};

export default Navbar;
