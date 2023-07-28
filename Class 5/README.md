## Named export
```
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://cdn.freebiesupply.com/logos/large/2x/the-eatery-logo-png-transparent.png"
      alt=""
    />
  </a>
);
```
can be imported as ```import {Title} from './componenents/Header.js' ```

## Default export

```
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
```
can be imported as ```import Header from './components/Header.js' ```