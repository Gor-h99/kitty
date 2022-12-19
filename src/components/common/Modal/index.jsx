import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Close } from "assets/icons/close.svg";
import "./Modal.scss";

const Modal = ({ open, onClose, children }) => {
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    },
    [open, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return ReactDOM.createPortal(
    <>
      <div className="modal__background"></div>
      {open ? (
        <div className="modal">
          <div className="modal-header">
            <div className="modal-header__close" onClick={() => onClose()}>
              <Close />
            </div>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      ) : null}
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
