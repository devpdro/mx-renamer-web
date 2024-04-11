import { Button } from "../../../../../../Form";

interface OrderingProps {
  onButtonClick: () => void;
}

const Ordering: React.FC<OrderingProps> = ({ onButtonClick }) => {
  return (
    <div>
      <Button variant="tertiary" onClick={onButtonClick}>
        Ordem
      </Button>
    </div>
  );
};

export default Ordering;
