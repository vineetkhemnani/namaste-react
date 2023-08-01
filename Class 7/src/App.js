import React from 'react';
import ReactDOM from 'react-dom/client';
// default import
import Header from './components/Header';
import Body from './components/Body.js';
import Footer from './components/Footer.js';


// named import
// import { Title } from './components/Header';
/**
 *  Header
 *    - Logo(Title)
 *    - Nav Items(Right side)
 *    - Cart
 * Body
 *    - Search bar
 *    - restaurantList
 *    - RestaurantCard (many)
 *        - Image
 *        - Name
 *        - Rating
 * '      - Cuisines
 * Footer
 *    - Links
 *    - Copyright
 *
 *
 */




// props- properties




const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

const jsx = (
  <div
    style={{
      backgroundColor: 'red',
    }}
  >
    <h1>JSX</h1>
    <h1>Second JSX</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)
