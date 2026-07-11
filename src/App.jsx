import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const zero=()=>{
    if(count === 0 ){
      setCount(0);
    }
    else{
      setCount(count-1);
    }
  }

  return (
    <>
      <div className="container">
        <h1>Counter App</h1>

        <div className="count">{count}</div>

        <div className="buttons">
          <button onClick={()=>{setCount(count+1)}}>+</button>
          <button onClick={()=>{setCount(0)}}>Reset</button>
          {/* <button onClick={()=>{setCount(count-1)}}>-</button> */}
          <button onClick={()=>{zero()}}>-</button>
        </div>

      </div>
    </>
  );
}

export default App;
