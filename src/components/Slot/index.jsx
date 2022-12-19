import { useEffect, useState } from "react";
import { array, checkCombination, distribution, initialSpinValue, randomItems } from "helpers/checkCombination";
import { winCombination } from "helpers/winCombinationTable";
import Kitty from "./components/Kitty";
import { useDispatch } from 'react-redux';
import { calculateLose, calculateResult } from 'store/slices/currency/currencySlice';
import "./Slot.scss";

let spinTimeoutId;
const Slot = ({ spin, setSpin }) => {
  const [kittys, setKittys] = useState(initialSpinValue);
  const [win, steWin] = useState([]);
  const [spinCount, setSpinCount] = useState(5);
  const [targetRow, setTargetRow] = useState(4);

  const dispatch = useDispatch()

  useEffect(() => {
    if (spin) {
      steWin([]);
      spinCount > 0 &&
      (spinTimeoutId = setTimeout(() => {
        playSlot();
        setSpinCount((prev) => prev - 1);
      }, 200));
    }

    if (!spinCount) {
      setSpin(false);
      setSpinCount(5);
      clearInterval(spinTimeoutId);
      steWin(kittys[targetRow]);
    }

    return () => {
      clearTimeout(spinTimeoutId);
    };
  }, [spinCount, spin]);

  useEffect(() => {
    if (win.length) {
      const winningPrice = winCombination(checkCombination(win));
      if (Boolean(winningPrice)) {
        dispatch(calculateResult(winningPrice))
      } else {
        dispatch(calculateLose())
      }
    }
  }, [win]);

  const playSlot = () => {
    setKittys((prev) => prev.map(() => randomItems(array, distribution)));
  };

  const handleRowChange = (row) => {
    if (row >= 3 && row <= 5 && !spin) {
      setTargetRow(row);
    }
  }

  return (
    <div className="slot">
      {kittys.map((item, i) => (
        <div
          key={i}
          className={`slot__items__container ${i === targetRow ? "slot-center" : ""}`}
          onClick={() => handleRowChange(i)}
        >
          {item.map((item, idx) => (
            <Kitty key={idx} item={item} spin={spin} idx={idx} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Slot;