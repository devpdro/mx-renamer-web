import { TextRules } from "../../../../../../Form";

interface FileExtensionProps {
  onButtonClick: () => void;
}

const FileExtension: React.FC<FileExtensionProps> = ({ onButtonClick }) => {
  return (
    <div>
      <TextRules variant="primary" onClick={onButtonClick}>
        Entesão de arquivo
      </TextRules>
    </div>
  );
};

export default FileExtension;
