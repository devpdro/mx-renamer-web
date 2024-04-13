import { Rules } from "../../../../../../Form";

interface OrderingProps {
  onButtonClick: () => void;
}

const Ordering: React.FC<OrderingProps> = ({ onButtonClick }) => {
  return (
    <div>
      <Rules onClick={onButtonClick}>
        Ordem
      </Rules>
    </div>
  );
};

export default Ordering;
