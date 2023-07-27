- **browsersList** handles for which older browsers our code should work in.
- **babel** uses this browsersList to convert newer code into older versions of code.
- We do not need to write polyfills, Babel does it for us.
- *Create a start script in package.json to skip writing the entire command*\
```"start":"parcel index.html"```
- Now instead of writing ```npx parcel index.html```
We can write ```npm run start``` to execute above
- Similarly for a build script instead of ```npx parcel build index.html``` we can create a build command ```"build": "parcel build index.html"```
- npx = npm run or simply npm
```npm run start``` or ```npm start```
- console.log() are not automatically removed. They need to be configured to remove by a package called ***babel-plugin-transform-remove-console***
- Install babel-plugin-transform-remove-console
```npm install babel-plugin-transform-remove-console --save-dev```
- Create .babelrc file which will contain the configurations

## Warning in the console
- Whenever we pass an array to be returned to render for example: in App.js
[heading,heading2], we need to specify key: value pairs inside each element (heading) to prevent the warning.
- This warning is due to the fact that **REACT HAS TO RE-RENDER EVERYTHING IN CASE OF new CHILDREN AND THIS MAKES CODE INEFFICIENT**
- React will have to re render the DOM tree if no key props
- If you implement it naively, inserting an element at the beginning has worse performance. For example, converting between these two trees works poorly:
```
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```
React will mutate every child instead of realizing it can keep the <li>Duke</li> and <li>Villanova</li> subtrees intact. This inefficiency can be a problem.

## Keys
In order to solve this issue, React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key to our inefficient example above can make the tree conversion efficient:
```
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```
Now React knows that the element with key '2014' is the new one, and the elements with the keys '2015' and '2016' have just moved.
**React keeps a track of our key**


## JSX
- JSX is not HTML inside JavaScript but it is **HTML-like syntax**
- **Babel understands JSX**
- JSX uses React.createElement behind the scenes usingg **BABEL**
- JSX => React.createElement => Object => HTML(DOM) 
**Babel comes along with parcel**
- **There is one more package-lock.json inside node_modules**

## React Component
- Class Based Component (Old)
- Functional Component - MOSTLY USED

- **Functional component** is a normal javascript function that returns a piece of JSX or a react element or a component
- Conventionally React components name **Start with a capital letter** *(but we can write in lowercase too)*
```
const HeaderComponent = () => {
  return <h1>Namaste React from functional component</h1>
}
```
## Multiple elements in a component
We can write with/without return statement
```
const HeaderComponent1 = () => {
  return (
    <div>
      <h1>Namaste React from functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
    
  )
}
```
or
```
const HeaderComponent2 = () => {
  (
    <div>
      <h1>Namaste React from functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
    
  )
}
```
## Rendering a functional component
```
const HeaderComponent = () => {
  return <h1>Namaste React from functional component</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>);
```

## React Element vs React Component
- This is a react element
```
const heading2 = (
  <h1 id="title" key="h2">
    Namaste React
    </h1>
);
```
- This is a REACT COMPONENT
```
const HeaderComponent1 = () => {
  return (
    <div>
      <h1>Namaste React from functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  )
}
```

## Using REACT ELEMENT INSIDE REACT COMPONENT
```
// React element
const heading1 = (
  <h1 id="title" key="h2">
    Namaste React
    </h1>
);

// React Component
const HeaderComponent1 = () => {
  return (
    <div>
      {heading1}
      <h2>Namaste React from functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
    
  )
}
```

## Using Component inside Component
```
// Component to be used inside
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
    </h1>
);

// React Component
const HeaderComponent1 = () => {
  return (
    <div>
      <Title/>
      <h2>Namaste React from functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
    
  )
}
```
**ABOVE IS KNOWN AS COMPONENT COMPOSITION**
**(COMPONENT INSIDE COMPONENT)**
or simply
```
// Component to be used inside
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
    </h1>
);

// React Component
const HeaderComponent1 = () => {
  return (
    <div>
      {Title()}
      <h2>Namaste React from functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
    
  )
}
```
- **ANY PIECE OF JAVASCRIPT CODE CAN BE WRITTEN IN {}**
- JSX is secure. It **sanitizes data** in {} and XSS(Cross Site Scripting) cant happen
