import BidAmount from "./componenets/BidAmount";
import "./SlotPanel.scss";
import { useSelector } from 'react-redux';
import { selectorCurrency } from '../../store/selectors';

const SlotPanel = ({ spin, setSpin }) => {
  const {bidAmounts, currency, chooseBid, chosenBalance} = useSelector(selectorCurrency)

  const handleSpin = () => {
    if(chooseBid > chosenBalance.value) {
      alert('Your balance is not enough!');
    } else {
      setSpin((prev) => !prev);
    }
  };
  return (
    <div className="slotPanel">
      <div className="slotPanel__bid__amount__container">
        {bidAmounts.map((item) => (
          <BidAmount key={item} item={item} currency={currency} chooseBid={chooseBid}/>
        ))}
      </div>
      <button className={`slotPanel__button ${spin || chooseBid > chosenBalance.value ? "disabled" : ""}`} onClick={handleSpin} disabled={spin || chooseBid > chosenBalance.value}>
        SPIN
      </button>
    </div>
  );
};

export default SlotPanel;
