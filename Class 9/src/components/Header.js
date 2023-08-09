import { useState } from "react";
import Logo from "../assets/img/the-eatery-logo.png";
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={Logo}
      alt=""
    />
  </a>
);
function loggedInUser() {
  // authentication
  return true;
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "✅":"🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
};
export default Header;