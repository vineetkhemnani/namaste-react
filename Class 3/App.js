import React from 'react'
import ReactDOM from 'react-dom/client'
// React.createElement creates a React object=> converted to HTML code and put up on DOM
// React.createElement=> Object=> Rendered on DOM
// const heading = React.createElement(
//   'h1',
//   {
//     // define id,className etc in this object
//     id: 'title',
//     key: 'h1'
//   },
//   'Namaste everyone'
// )
// console.log(heading);

// JSX expression
// React element
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
)
// console.log(heading)

// React Component
const HeaderComponent1 = () => {
  return (
    <div>
      {Title()}
      {/* piece of javascript code */}
      <h2>Namaste React from functional component</h2>
      <h2>This is a h2 tag in HeaderComponent1</h2>
    </div>
  )
}
// Composing Components
const HeaderComponent2 = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React from functional component</h2>
      <h2>This is a h2 tag in Header-Component2</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
// render injects it into our DOM into the root
// react root overwrites whatever is written in it
root.render(<HeaderComponent2 />)
