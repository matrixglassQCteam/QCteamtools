import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className='navbar'>
      <Link to='/wtp' className='nav-link'>
        Water
      </Link>
      <Link to='/dia' className='nav-link'>
        Diagonal
      </Link>
      <Link to='/temp' className='nav-link'>
        Temp
      </Link>
      <Link to='/dgu' className='nav-link'>
        Dgu
      </Link>
    </nav>
  );
}

export default Navigation;
