import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [diagonal, setDiagonal] = useState(null);

  let calc = () => {
    function rectangleDiagonal(length, width) {
      return Math.sqrt(length ** 2 + width ** 2);
    }

    const result = rectangleDiagonal(parseFloat(width), parseFloat(height));
    setDiagonal(result);
  };

  let widthValue = (value) => {
    setWidth(value.target.value);
  };

  let heightValue = (value) => {
    setHeight(value.target.value);
  };

  return (
    <>
      <div>
        <input type='number' placeholder='width' onChange={widthValue} />
        <br />
        <input type='number' placeholder='height' onChange={heightValue} />
      </div>
      <div>
        <p>diagonal</p>
        <p>{diagonal !== null ? diagonal.toFixed(2) : ""}</p>
      </div>
      <button onClick={calc}>calculate</button>
    </>
  );
}

export default App;
