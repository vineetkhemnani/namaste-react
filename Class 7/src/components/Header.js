import { useState } from "react";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://cdn.freebiesupply.com/logos/large/2x/the-eatery-logo-png-transparent.png"
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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ?  (<button onClick={() => setIsLoggedIn(false)} >Logout</button> ): <button onClick={()=> setIsLoggedIn(true)}>Login</button>}
    </div>
  )
};
export default Header;