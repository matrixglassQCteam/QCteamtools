import { useState } from "react";
import "./style1.css"

function WaterTests() {

  const [cutting, setCutting] = useState({"ph" : 9, "con" : 10, "Tds" : 8})
  const [dgu, setDgu] = useState({"ph" : 0, "con" : 0, "Tds" : 0})
  const [lami, setLami] = useState({"ph" : 9, "con" : 10, "Tds" : 8})

  return (
    <div className="cutting-style">
      <div className="cutting">
        <h2>
          cutting
        </h2>
        <div className="time">
          <button>R1</button><button>R2</button> <button>new</button>
        </div>
        <div className="values">
          <p>Ph - {cutting.ph}</p>
          <p>Con - {cutting.con}</p>
          <p>Tds - {cutting.Tds}</p>
        </div>
      </div>
      <div className="dgu">
        <h2>
          DGU
        </h2>
        <div className="time">
          <button>R1</button><button>R2</button><button>new</button>
        </div>
        <div className="values">
          <p>Ph - {dgu.ph}</p>
          <p>Con - {dgu.con}</p>
          <p>Tds - {dgu.Tds}</p>
        </div>
      </div>
      <div className="lami">
        <h2>
          Lami
        </h2>
        <div className="time">
          <button>R1</button><button>R2</button><button>new</button>
        </div>
        <div className="values">
          <p>Ph - {lami.ph}</p>
          <p>Con - {lami.con}</p>
          <p>Tds - {lami.Tds}</p>
        </div>
      </div>
    </div>
  );
}

export default WaterTests;
