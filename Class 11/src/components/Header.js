import { useState, useContext } from 'react'
import Logo from "../assets/img/the-eatery-logo.png";
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline";
import UserContext from '../utils/userContext';

const Title = () => (
  <a href="/">
    <img
      className="h-28 px-2"
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
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-[#c4fbfb] shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/About">About</Link>
          </li>
          <li className="px-2">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/Instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? '✅' : '🔴'}</h1>
      <div>
        <span className="p-10 font-bold text-blue-600">{user.name}</span>

        {isLoggedIn ? (
          <button
            className="bg-gray-400 mt-6 p-3 rounded"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-gray-400 mt-6 mr-3 p-3 rounded"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  )
};
export default Header;