import {
  DownloadPanel,
  FileManager,
  UploudFile,
  RuleManager,
} from "./components";

import * as S from "./manager-styles";

const Manager = () => {
  return (
    <S.Container>
      <UploudFile />
      <RuleManager />
      <FileManager />
      <DownloadPanel />
    </S.Container>
  );
};

export default Manager;
