import { useSelector } from "react-redux";
import { Button } from "../../../../../../Form";
import { initialState } from "../../../../../../../../store/reducers/reducers";

const Download = () => {
  const files = useSelector((state: typeof initialState) => state.name);

  const handleDownload = () => {
    if (!files || files.length === 0) {
      console.log("Nenhum arquivo para baixar.");
      return;
    }

    files.forEach((fileName) => {
      if (typeof fileName === "string") {
        // Verifica se fileName é uma string
        // Criar uma requisição HEAD para obter o tipo de arquivo
        fetch(fileName, { method: "HEAD" })
          .then((response) => {
            // Verificar se a requisição foi bem sucedida e se o tipo de arquivo é PDF
            if (
              response.ok &&
              response.headers.get("content-type") === "application/pdf"
            ) {
              // Se for um PDF, fazer o download
              const link = document.createElement("a");
              link.href = fileName;
              link.download = fileName.split("/").pop() || ""; // Define o nome do arquivo para download
              link.click();
            } else {
              alert("O arquivo não é um PDF válido.");
            }
          })
          .catch((error) => {
            console.log("Erro ao verificar o tipo de arquivo:", error);
          });
      } else {
        console.log("Nome do arquivo inválido:", fileName);
      }
    });
  };

  return <Button variant="tertiary" onClick={handleDownload}>Baixar todos os arquivos</Button>;
};

export default Download;
