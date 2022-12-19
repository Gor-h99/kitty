import sol from "assets/icons/sol.svg";
import skt from "assets/icons/skt.png";
import "./Currency.scss";

const Currency = ({ type }) => {
  return (
    <div className="currency__container">
      <div className={type === "SOL" ? "currency-sol" : "currency-usdc"}>
        <img src={type === "SOL" ? sol : skt} alt={type} />
      </div>
      <span className="currency__container__type">{type}</span>
    </div>
  );
};

export default Currency;
