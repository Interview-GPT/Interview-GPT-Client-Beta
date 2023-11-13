import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="nav-main">
      <div className="navbar">
        <span>logo goes here</span>
        <Link className="link" to="">
          Home
        </Link>
        <Link className="link" to="resume">
          Resume
        </Link>
        <Link className="link nav-login" to="login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
