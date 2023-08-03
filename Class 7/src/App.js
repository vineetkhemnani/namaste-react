import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
// default import
import Header from './components/Header';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import { createBrowserRouter,RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
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
      {/* Place where I want to render random things ex:- Body, About , Contact us */}
      {/* {Outlet} */}
      <Outlet/>
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  // place where we define what happens when load /path
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },

    ],
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>);
