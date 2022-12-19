import "./Transactions.scss";
import { ReactComponent as ArrowCircleUp } from "assets/icons/arrow_circle_up.svg";
import { ReactComponent as ArrowCircleDown } from "assets/icons/arrow_circle_down.svg";
import { useState } from "react";
import Modal from "components/common/Modal";
import TransactionsContent from "components/TransactionsContent";
const Transactions = ({ handleChange }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tabName, setTabName] = useState("");

  const handleOpenModal = (e) => {
    const type = e.target.innerText;
    handleChange();
    setOpenModal((prev) => !prev);
    setTabName(type);
  };

  return (
    <div className="Transactions">
      <div className="Transactions__button" onClick={handleOpenModal}>
        <ArrowCircleUp className="Transactions__button__icon" />
        <p className="Transactions__button__text">DEPOSIT</p>
      </div>
      <div className="Transactions__button" onClick={handleOpenModal}>
        <ArrowCircleDown className="Transactions__button__icon" />
        <p className="Transactions__button__text">WITHDRAW</p>
      </div>
      {openModal && (
        <Modal open={openModal} onClose={setOpenModal}>
          <TransactionsContent tabName={tabName} setTabName={setTabName} />
        </Modal>
      )}
    </div>
  );
};

export default Transactions;
