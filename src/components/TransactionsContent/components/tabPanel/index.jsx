import { TRANSACTIONS } from "helpers/constants";
import "./TabPanel.scss";
const { DEPOSIT, WITHDRAW } = TRANSACTIONS;
const TabPanel = ({ tabName, setTabName }) => {
  const changeTabPanel = (type) => () => setTabName(type);
  return (
    <div className="modal__tabpanel">
      <div
        className={`modal__tabpanel-item ${tabName === DEPOSIT ? "modal__tabpanel-item_active" : ""}`}
        onClick={changeTabPanel(DEPOSIT)}
      >
        Deposit
      </div>
      <div
        className={`modal__tabpanel-item ${tabName === WITHDRAW ? "modal__tabpanel-item_active" : ""}`}
        onClick={changeTabPanel(WITHDRAW)}
      >
        Withdraw
      </div>
    </div>
  );
};

export default TabPanel;
