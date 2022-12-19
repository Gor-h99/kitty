import "./BidAmount.scss";
import { useDispatch } from 'react-redux';
import { changeBid } from '../../../../store/slices/currency/currencySlice';

const BidAmount = ({ item, currency,chooseBid }) => {
  const dispatch = useDispatch()

  const handleChange = (item) => () => dispatch(changeBid(item))

  return (
    <div className={`slotPanel__bid__amount ${chooseBid === item ? 'slotPanel__bid__amount__active' : ''}`} onClick={handleChange(item)}>
      {item} {currency}
    </div>
  )
};

export default BidAmount;
