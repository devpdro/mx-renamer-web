import { ClearList, Download, FileStatistics, RestoreName } from "./components";

import * as S from './download-panel-styles'

const DownloadPanel = () => {
  return (
    <S.Container>
      <div>
        <FileStatistics />
      </div>
      <S.Buttons>
        <ClearList />
        <RestoreName />
        <Download />
      </S.Buttons>
    </S.Container>
  );
};

export default DownloadPanel