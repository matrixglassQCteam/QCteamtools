import { Routes, Route } from "react-router-dom";
import "./App.css";
import Diagonal from "./pages/diagonal/Diagonal";
import WaterTest from "./pages/watertest/WaterTest";
import Tempering from "./pages/tempering/Tempering";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Diagonal />} />
        <Route path='/dia' element={<Diagonal />} />
        <Route path='/wtp' element={<WaterTest />} />
        <Route path='/temp' element={<Tempering />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
