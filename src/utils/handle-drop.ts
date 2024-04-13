import { useState } from "react";
import { useDispatch } from "react-redux";

import { addFiles } from "../store/actions/actions";

export const HandleDrop = () => {
  const [files, setFiles] = useState<string[]>([]);
  const dispatch = useDispatch();

  const updateFiles = (newFiles: string[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    dispatch(addFiles(newFiles));
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newFiles: File[] = Array.from(event.dataTransfer.files);
    const newFileNames = newFiles.map((file) => file.name);
    updateFiles(newFileNames);

    // Ler o conteúdo dos arquivos
    newFiles.forEach(async (file) => {
      const fileContent = await readFile(file);
      console.log(fileContent); // Aqui você pode fazer o que quiser com o conteúdo do arquivo
    });
  };

  const readFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          resolve(e.target.result.toString());
        } else {
          reject(new Error("Erro ao ler o arquivo"));
        }
      };
      reader.onerror = () => {
        reject(reader.error);
      };
      reader.readAsDataURL(file);
    });
  };

  return { files, handleDrop };
};
