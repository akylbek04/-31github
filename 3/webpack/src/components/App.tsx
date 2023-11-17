import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
