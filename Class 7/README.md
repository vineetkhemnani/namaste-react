## UseEffect() without dependency array
- If we dont have a dependency array, it means useEffect() is not dependent on anything
**It will be called after each and every render**
```
useEffect(() => {
    console.log("useEffect called");
})
```
- if we have no dependency array, Every time component renders, useEffect() will be called

- **If we had an empty dependency array, useEffect() was called only once after initial render**
- If we have dependency in the array, useEffect is called once after initial render and each time the dependency changes

## NEVER CREATE A COMPONENT INSIDE A COMPONENT
## NEVER CREATE A USESTATE() INSIDE IF ELSE
- React wont know whether the variable will be there or not as ***React doesnt like inconsistencies***
## NEVER WRITE USESTATE() INSIDE A FOR-LOOP
## NEVER USE USESTATE() OUTSIDE FUNCTIONAL COMPONENT
- React provides useState() to create a local variable inside a functional component

## We can create more than one useEffect() according to use cases
- Optimize images before uploading to CDN as they wont be optimized after they are called to our browser from CDN

# Routing
## Setting up router
- Install npm package
```npm i react-router-dom```
- Import createBrowserRouter from react-router-dom
```import { createBrowserRouter } from 'react-router-dom';```

## Create appRouter configuration
```
const appRouter = createBrowserRouter([
  // place where we define what happens when load /path
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path: "/About",
    element: <About/>
  },

]);
```
- createBrowserRouter([]) takes an array of objects which define path and what component to load on that path

## Dynamic rendering
- There is a component called RouterProvider which is coming from react-router-dom
```import { createBrowserRouter,RouterProvider } from 'react-router-dom';```
- We are rendering <AppLayout/> always but we need to render dynamically
- pass appRouter() to render
```root.render(<RouterProvider router={appRouter}/>);```

## Handling errors
- define an error component as an errorElement inside createBrowserRouter
```
{
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>
  }
```
### useRouteError hook
```import { useRouteError } from "react-router-dom"
```
```
import { useRouteError } from "react-router-dom"
const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div>
        <h1>Oops!</h1>
        <h2>Something went wrong!!</h2>
    </div>
  )
}
export default Error
```
- **err** is an object that contains all the data about the error
