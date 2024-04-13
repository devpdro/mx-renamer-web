import { useSelector } from "react-redux";
import { initialState } from "../../../../../../../../store/reducers/reducers";

const FileStatistics = () => {
    const files = useSelector((state: typeof initialState) => state.name);
  // Acessa o estado do Redux
  // Calcula o total de arquivos
  const totalFiles = files.length

  // Calcula o tamanho total dos arquivos
  const totalSize = files.reduce(
    (total: any, fileSize: any) => total + fileSize,
    0
  );

  return (
    <>
      <p>Total de arquivos: {totalFiles}</p>
      <p>Tamanho total: {totalSize} bytes</p>
    </>
  );
};

export default FileStatistics;
