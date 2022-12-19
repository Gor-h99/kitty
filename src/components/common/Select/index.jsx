import { useCallback, useEffect, useState } from "react";
import Option from "./components/Option";
import Currency from "./components/Currency";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, setChosenBalance } from "store/slices/currency/currencySlice";
import { selectorCurrency } from "store/selectors";
import Transactions from "./components/Transactions";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { ReactComponent as ArrowTop } from "assets/icons/arrow_top.svg";
import { ReactComponent as ArrowBottom } from "assets/icons/arrow_bottom.svg";
import "./Select.scss";

const Select = () => {
  const [open, setOpen] = useState(false);
  const { chosenBalance, balances } = useSelector(selectorCurrency);
  const dispatch = useDispatch();

  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const getBalance = useCallback(async () => {
    connection.getBalance(publicKey).then((bal) => {
      dispatch(setChosenBalance({ value: bal / LAMPORTS_PER_SOL, type: "SOL" }));
    });
  }, [publicKey, connection]);

  const handleChange = () => setOpen((prev) => !prev);
  const changeBalance = (item) => () => {
    dispatch(setChosenBalance(item));
    handleChange();
    dispatch(changeCurrency(item.type));
  };

  useEffect(() => {
    if (publicKey) getBalance();
  }, [publicKey, connection]);

  return (
    <div className="select__balance">
      <div className="select__balance__content" onClick={handleChange}>
        <span className="select__balance__content__price">
          {chosenBalance?.value.toFixed(2)} {chosenBalance?.type}
        </span>
        <div className="select__balance__content__right">
          <Currency type={chosenBalance?.type} url={chosenBalance?.url} />
          {open ? (
            <ArrowTop className="select__balance__content__right__arrow" />
          ) : (
            <ArrowBottom className="select__balance__content__right__arrow" />
          )}
        </div>
      </div>
      <div className={`select__balance__dropdown ${open ? "select__balance__dropdown-open" : ""}`}>
        {balances?.map((item, i) => (
          <Option key={i} item={item} changeBalance={changeBalance} />
        ))}
        <Transactions handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Select;
