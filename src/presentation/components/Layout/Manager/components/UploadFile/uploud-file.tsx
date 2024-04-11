import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFiles } from "../../../../../../store/actions/actions";
import { Button } from "../../../../Form";
import * as S from "./uploud-file";

const UploudFile = () => {
  const [files, setFiles] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newFiles: File[] = Array.from(event.dataTransfer.files);
    const newFileNames = newFiles.map((file) => file.name);
    const updatedFiles = [...files, ...newFileNames];
    setFiles(updatedFiles);
    dispatch(addFiles(updatedFiles));
  };

  const handleButtonClick = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fileHandles = await (window as any).showOpenFilePicker({
        multiple: true,
      });
      const newFileNames = await Promise.all(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fileHandles.map(async (fileHandle: any) => {
          const file = await fileHandle.getFile();
          return file.name;
        })
      );
      const updatedFiles = [...files, ...newFileNames];
      setFiles(updatedFiles);
      dispatch(addFiles(updatedFiles)); // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(`Error selecting files: ${err.message}`);
    }
  };

  const handleButtonClickFolder = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const directoryHandle = await (window as any).showDirectoryPicker();
      const entries = await directoryHandle.values();
      const folderNames = [];
      for await (const entry of entries) {
        if (entry.kind === "directory") {
          folderNames.push(entry.name); // Adiciona o nome da pasta
        } else {
          folderNames.push(entry.name); // Adiciona o nome do arquivo
        }
      }
      const updatedFiles = [...files, ...folderNames];
      setFiles(updatedFiles);
      dispatch(addFiles(updatedFiles)); // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(`Error selecting folders: ${err.message}`);
    }
  };

  return (
    <S.Container onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <S.BoxContainer>
        <S.IconBox>
          <S.Icon />
        </S.IconBox>
        <S.ButtonBox>
          <Button onClick={handleButtonClick} variant="tertiary">
            Selecionar arquivo
          </Button>
          <Button onClick={handleButtonClickFolder} variant="quartinary">
            Selecionar pasta
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
