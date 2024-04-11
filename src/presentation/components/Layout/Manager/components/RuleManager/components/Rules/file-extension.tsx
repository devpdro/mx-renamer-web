import { Button } from "../../../../../../Form";

interface FileExtensionProps {
  onButtonClick: () => void;
}

const FileExtension: React.FC<FileExtensionProps> = ({ onButtonClick }) => {
  return (
    <div>
      <Button variant="tertiary" onClick={onButtonClick}>
        Entesão de arquivo
      </Button>
    </div>
  );
};

export default FileExtension;
