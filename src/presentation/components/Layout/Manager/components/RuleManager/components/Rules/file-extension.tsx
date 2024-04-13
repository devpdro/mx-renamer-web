import { Rules } from "../../../../../../Form";

interface FileExtensionProps {
  onButtonClick: () => void;
}

const FileExtension: React.FC<FileExtensionProps> = ({ onButtonClick }) => {
  return (
    <div>
      <Rules onClick={onButtonClick}>
        Entesão de arquivo
      </Rules>
    </div>
  );
};

export default FileExtension;
