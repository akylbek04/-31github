import { useState } from "react";
import classes from "./App.module.scss";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>{count}</div>
      <button className={classes.button} onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
