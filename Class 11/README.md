- The whole UI layer of react application is powered by a data layer.
- The data is the **state and the props**
- If we need a variable whose **scope is within the component**, it is known as **state**
- **Passing data from one component to another component, we use props.**

## Passing props
- <AppLayout/>
    {state=user}
        <Body user={user} />
          - <RestaurantCard user={user}/>

THIS IS KNOWN AS **PROP DRILLING**

```
const Instamart = () => {
  return (
    <div>
      <Section
        title={'About Instamart'}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
        }
      />

      <Section
        title={'Careers'}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        }
      />

      <Section
        title={'Team Instamart'}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        }
      />
    </div>
  )
}
```
- All three sections have their own individual copy of state,
Suppose if one is true other can be false
- The children are controlling the state,
- If we want to transfer the control of the state to the parent, it is known as **lifting the state up**

## Passing data across components
Suppose we need a same piece of info all across my app
- We can use prop drilling
- We can use localStorage but updating the local storage is a heavy operation
- We use a central storage provided by react called **react-Context**
(Some also redux store)
- ***React context/ Redux store*** - It is like a shared state for all the components in the app or the whole app. Any component can use that data
- We cant use a global variable instead as React is not tracking it (similar to useState())

## Creating context
- ```import { createContext } from "react";```
```
import { createContext } from "react";

const UserContext = createContext({
    name: "Dummy name",
    email: "dummy@gmail.com"
});

export default UserContext;
```

- createContext() takes in the data which is to be passed inside the app basically the default value of the object

## Using context
- ```import { useContext } from "react";
    import UserContext from '../utils/userContext';```

```
const {user} = useContext(UserContext);
```
- Display in header using {user.name}

## useState(), props vs createContext(),useContext()
- useState(), props are tied to a component
whereas createContext(), useContext() are like a constant file accessible all across the app

## Using context in class-based components
- in class-based components in the **render()** function,
```
  <UserContext.Consumer>
      {(value)=>console.log(value)}
  </UserContext.Consumer>
```
- The value holds the value of the UserContext
for eg.
```
  <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-red-600 text-xl">{user.name}</h4>
          )}
  </UserContext.Consumer>
```

## USing dynamic context
```
  <>
      <UserContext.Provider value={{
        user: user
      }}>
        <Header />
        {/* Place where I want to render random things ex:- Body, About , Contact us */}
        {/* {Outlet} */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
  </>
```

- above passes UserContext to all the components
