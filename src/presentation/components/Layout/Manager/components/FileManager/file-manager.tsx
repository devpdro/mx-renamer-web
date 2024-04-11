import { useSelector } from "react-redux";

import { Table } from "./components";

import * as S from "./file-manager-styles";

const FilesManager = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const files = useSelector((state: any) => state);

  const handleSaveFile = (fileName: string) => {
    try {
      // Simular a ação de salvar o arquivo
      alert(`Arquivo ${fileName} salvo com sucesso!`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(`Erro ao salvar arquivo ${fileName}: ${err.message}`);
    }
  };

  return (
    <S.Container>
      <S.TableContainer>
        <Table
          caption="#"
          data={files.id.map((id: string, index: number) => ({
            id: id.toString(),
            index,
          }))}
          width="11%"
        />
        <Table
          caption="Nome do arquivo original"
          data={files.name.map((name: string, index: number) => ({
            name,
            index,
          }))}
          width="37%"
        />
        <Table
          caption="Novo nome do arquivo"
          data={files.newName.map((newName: string, index: number) => ({
            newName,
            index,
          }))}
          width="37%"
        />
        <Table
          caption="Baixar um por um"
          data={files.name.map((fileName: string) => (
            <button key={fileName} onClick={() => handleSaveFile(fileName)}>
              Baixar
            </button>
          ))}
          width="15%"
        />
      </S.TableContainer>
    </S.Container>
  );
};

export default FilesManager;
