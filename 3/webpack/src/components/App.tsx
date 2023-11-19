import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import impostor from "@/assets/impostor.png";
import jpeg from "@/assets/jpeg.jpeg";
import Apple from "@/assets/apple.svg";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src={impostor} width={40} height={40} />
      <img src={jpeg} width={40} height={40} />
      <div>
        <Apple className={classes.icon} color={'grey'} width={100} height={100} />
      </div>
      <div className="wrapper">
        <Link to={"/about"}>About</Link>
        <Link to={"/shop"}>Shop</Link>
      </div>
      <div>{count}</div>
      <button className={classes.button} onClick={() => setCount(count + 1)}>
        +
      </button>
      <Outlet />
    </div>
  );
};

export default App;
