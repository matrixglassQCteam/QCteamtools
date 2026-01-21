import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className='navbar'>
      <Link to='/dia' className='nav-link'>
        Diagonal
      </Link>
      <Link to='/wtp' className='nav-link'>
        Water tests
      </Link>
      <Link to='/temp' className='nav-link'>
        Temp
      </Link>
    </nav>
  );
}

export default Navigation;
