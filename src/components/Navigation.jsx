import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className='navbar'>
      <Link to='/dia' className='nav-link'>
        Diagonal (DIA)
      </Link>
      <Link to='/wtp' className='nav-link'>
        Water Tests (WTP)
      </Link>
      <Link to='/temp' className='nav-link'>
        Tempering (TEMP)
      </Link>
    </nav>
  );
}

export default Navigation;
