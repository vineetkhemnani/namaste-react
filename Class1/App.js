// createElement creates a React object
const heading = React.createElement(
  'h1',
  {
    // define id,className etc in this object
    id: 'title',
  },
  'Namaste everyone'
)
const heading2 = React.createElement(
  'h2',
  {
    id: 'heading2',
  },
  'Namaste from heading 2'
)
const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading, heading2]
)

// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
// render injects it into our DOM into the root
// react root overwrites whatever is written in it
root.render(container)
