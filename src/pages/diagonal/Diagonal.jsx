import { useState } from "react";
import "./diaStyle.css"

function Diagonal() {
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
    <section id="dia_container">
      <div>
        <input className="dia_input" type='number' placeholder='width' onChange={widthValue} />
        <br />
        <input className="dia_input" type='number' placeholder='height' onChange={heightValue} />
      </div>
      <div className="dia_output">
        <h2 id='diagonalHeading'>diagonal</h2>
        <p>{diagonal !== null ? diagonal.toFixed(2) : ""} mm</p>
      </div>
      <button className='diagonalButton' onClick={calc}>
        calculate
      </button>
    </section>
  );
}

export default Diagonal;
