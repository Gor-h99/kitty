import "./Option.scss";
import Currency from "../Currency";

const Option = ({ item, changeBalance }) => {
  const { value, type } = item;
  return (
    <div className="select__balance__option" onClick={changeBalance(item)}>
      <span className="select__balance__option__price">{value}</span>
      <Currency type={type} />
    </div>
  );
};
export default Option;
