import { useState } from "react";
import Currency from "components/common/Select/components/Currency";
import Option from "components/common/Select/components/Option";
import { ReactComponent as ArrowTop } from "assets/icons/arrow_top.svg";
import { ReactComponent as ArrowBottom } from "assets/icons/arrow_bottom.svg";
import "./SelectCurrency.scss";

const SelectCurrency = ({ balances, currency, setCurrency }) => {
  const [open, setOpen] = useState(false);
  const handleChange = () => setOpen((prev) => !prev);
  const changeCurrency = (item) => () => {
    setOpen(false);
    setCurrency(item);
  };

  return (
    <div className="select__currency">
      <div className="select__currency__content" onClick={handleChange}>
        <div className="select__currency__content__right">
          <Currency type={currency?.type} />
          {open ? (
            <ArrowTop className="select__currency__content__right__arrow" />
          ) : (
            <ArrowBottom className="select__currency__content__right__arrow" />
          )}
        </div>
      </div>
      <div className={`select__currency__dropdown ${open ? "select__currency__dropdown-open" : ""}`}>
        {balances?.map((item, i) => (
          <Option key={i} item={item} changeBalance={changeCurrency} />
        ))}
      </div>
    </div>
  );
};

export default SelectCurrency;
