import { useSelector } from "react-redux";
import { Button } from "../../../../../../Form";
import { initialState } from "../../../../../../../../store/reducers/reducers";

const Download = () => {
  const files = useSelector((state: typeof initialState) => state.name);
  const handleDownload = () => {
    if (files.length === 0) {
      console.log("Nenhum arquivo para baixar.");
      return;
    }

    const fileName = files[0]; // Seleciona o primeiro arquivo da lista
    const fileURL = fileName; // Usando apenas o nome do arquivo

    const link = document.createElement("a");
    link.href = fileURL;
    link.download = fileName; // Define o nome do arquivo para download
    link.click();
  };

  return <Button onClick={handleDownload}>Baixar todos os arquivos</Button>;
};

export default Download;
