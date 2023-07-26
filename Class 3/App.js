import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement creates a React object=> converted to HTML code and put up on DOM
// React.createElement=> Object=> Rendered on DOM
const heading = React.createElement(
  'h1',
  {
    // define id,className etc in this object
    id: 'title',
    key: 'h1'
  },
  'Namaste everyone'
)
// console.log(heading);

// JSX
const heading2 = (
  <h1 id="title" key="h2">
    Namaste React
    </h1>
);
// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
// render injects it into our DOM into the root
// react root overwrites whatever is written in it
root.render(heading2)
