import { TextRules } from "../../../../../../Form";

interface OrderingProps {
  onButtonClick: () => void;
}

const Ordering: React.FC<OrderingProps> = ({ onButtonClick }) => {
  return (
    <div>
      <TextRules variant="primary" onClick={onButtonClick}>
        Ordem
      </TextRules>
    </div>
  );
};

export default Ordering;
