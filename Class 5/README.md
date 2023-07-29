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
## State variables
- React doesnt know or care about normal local variables
- It will not sync them with the UI (for ex: not re-render them if they change)
- For syncing with UI, we need to use **STATE VARIABLES**

## Hooks
- In react we have one way data binding
In React we cant use normal local variable so we use special state variables
- These state variables are created by using hooks
- Hooks are special functions in React used to declare state variables
- useState() hooks returns an array => [variable name, function to update the variable]
```import {useState} from "react";```
```const [searchText, setSearchText] = useState();```
- We are simply destructuring the array (received from useState() hook) in the above code
- **setSearchText** need to be defined along with searchText state variable
- **setSearchText will act as the function used to change the value for searchText**
```
<div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value);
        }} />
```
- Above changes the text in input field according to user