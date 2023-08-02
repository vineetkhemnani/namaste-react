import React from 'react';
import ReactDOM from 'react-dom/client';
// default import
import Header from './components/Header';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';

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

const appRouter = createBrowserRouter([
  // place where we define what happens when load /path
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>
  },
  {
    path: "/About",
    element: <About/>
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>);
