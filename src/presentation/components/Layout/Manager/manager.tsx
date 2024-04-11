import { UploudFile, RuleManager } from "./components";
import FilesManager from "./components/FileManager/file-manager";

import * as S from "./manager-styles";

const Manager = () => {
  return (
    <S.Container>
      <UploudFile />
      <RuleManager />
      <FilesManager />
    </S.Container>
  );
};

export default Manager;
