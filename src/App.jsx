import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <div className="container">
        <h1>Counter App</h1>

        <div className="count">0</div>

        <div className="buttons">
          <button>+</button>
          <button>Reset</button>
          <button>-</button>
        </div>

      </div>
    </>
  );
}

export default App;
