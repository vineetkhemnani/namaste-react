const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://cdn.freebiesupply.com/logos/large/2x/the-eatery-logo-png-transparent.png"
      alt=""
    />
  </a>
);

const Header = () => {
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
    </div>
  );
};
export default Header;