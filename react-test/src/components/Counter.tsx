import { useContext } from "react";
import { AppContext } from "./../context/DataContext";
import classes from "./Counter.module.css";

const Counter = () => {
  const [{ counter }, dispatch] = useContext(AppContext);

  const setCounter = (action) => {
    switch (action) {
      case "add":
        dispatch({ type: "INCREASE_COUNTER" });
        break;
      case "sub":
        dispatch({ type: "DECREASE_COUNTER" });
        break;
      case "res":
        dispatch({ type: "RESET_COUNTER" });
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.counter}>
      <p>{counter}</p>
      <button onClick={() => setCounter("add")}>+</button>
      <button onClick={() => setCounter("sub")}>-</button>
      <button onClick={() => setCounter("res")}>0</button>
    </div>
  );
};

export default Counter;
