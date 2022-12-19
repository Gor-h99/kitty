import TabPanel from "components/TransactionsContent/components/tabPanel";
import { useState } from "react";
import { selectorCurrency } from "store/selectors";
import { useSelector } from "react-redux";
import SelectCurrency from "./components/selectCurrency";
import "./TransactionsContent.scss";

const TransactionsContent = ({ tabName, setTabName }) => {
  const [amount, setAmount] = useState(0);
  const { balances } = useSelector(selectorCurrency);
  const [currency, setCurrency] = useState(balances?.[0]);
  const changeAmount = (e) => (e.target.value >= 0 ? setAmount(e.target.value) : setAmount(0));
  return (
    <div className="Transactions_content">
      <TabPanel tabName={tabName} setTabName={setTabName} />
      <div className="Transactions_content_sellect">
        <div className="Transactions_content_sellect-currency">
          <label className="Transactions_content_network-title">Currency</label>
          <SelectCurrency balances={balances} currency={currency} setCurrency={setCurrency} />
        </div>
        <div className="Transactions_content_network">
          <label className="Transactions_content_network-title">Network</label>
          <div>Solana mainnet</div>
        </div>
      </div>
      <div className="Transactions_content_amount">
        <label className="Transactions_content_amount-title">Amount</label>
        <input className="Transactions_content_amount-input" type="number" value={amount} onChange={changeAmount} />
        <p className="Transactions_content_amount_balance">
          Available Balance: <span>{currency.value.toFixed(2)}</span>
        </p>
      </div>
      <button className="Transactions_content_button">{tabName}</button>
    </div>
  );
};

export default TransactionsContent;
