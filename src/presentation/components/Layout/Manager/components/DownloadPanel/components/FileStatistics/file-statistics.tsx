import { useSelector } from "react-redux";
import store from "../../../../../../../../store";

const FileStatistics = () => {
  // Acessa o estado do Redux
  const files = useSelector(
    (state: ReturnType<typeof store.getState>) => state
  );

  // Calcula o total de arquivos
  const totalFiles = files.name.length;

  // Calcula o tamanho total dos arquivos
  const totalSize = files.file.reduce(
    (total: number, fileSize: never) => total + fileSize,
    0
  );

  return (
    <div>
      <p>Total de arquivos: {totalFiles}</p>
      <p>Tamanho total: {totalSize} bytes</p>
    </div>
  );
};

export default FileStatistics;
