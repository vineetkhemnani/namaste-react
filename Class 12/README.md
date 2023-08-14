# Redux
- used for data management

## Cons
- It is complex to set up
- Huge learning curve
- complicated
- copy paste code required
- only useful for large scale applications (not for small apps)

**Redux toolkit came into being to solve this**

# Redux Toolkit
## Redux Store
- At the end of the day, Redux Store is a big object
- It is similar to a context but larger in size
- It can have various data divided into slices
- A slice is a small portion of our store
- **Our components CANNOT directly modify the store**
- we will have to dispatch an action
- Suppose we click the + button => we have dispatched an action called **addItem** which calls a function and this function will modify our cart (a slice of our store)
![redux store basics](https://github.com/vineetkhemnani/namaste-react/assets/78949423/e014260a-7d97-4570-b331-0e35b615455a)
- This function is known as **REDUCER**
- The + button dispatches an action called addItem that calls a function called Reducer that modifies a slice of our redux store
- If we have to call cart, we use **SELECTOR**
- This selector (read data) will contain the information that will update the cart
![selector and reducer in redux](https://github.com/vineetkhemnani/namaste-react/assets/78949423/e1b9ddbb-8ab7-417d-ad13-b3a790c821c2)
- **SELECTOR** - it means we are selecting a slice of the store
- At the end of the day, **SELECTOR** is a **HOOK** Which is a ***FUNCTION*** at the end of the day
- When we use selector to automatically change cart when slice in the store is changed, it is known as **SUBSCRIBING TO OUR STORE**
- Whenever our cart slice is modified in the store, it will automatically modify in the UI
![complete redux description](https://github.com/vineetkhemnani/namaste-react/assets/78949423/7c77de6d-3680-49c9-83ef-d272ba5c21ec)

## Installing Redux toolkit
```
npm install @reduxjs/toolkit
npm install react-redux
```
- **redux** (@reduxjs/toolkit) core's job is to maintain the data store (maintain the slices)
- **react-redux** is the bridge between react and redux

## Configure store
```
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({

});
```
- The store configuration will contain slices

## Provide store
Go to App.js
```
import { Provider } from 'react-redux';
import store from './utils/store';
```

```
return (
    <Provider store={store}>
      <!-- provide store to entire app -->
      <UserContext.Provider value={{
        user: user,
        setUser: setUser
      }}>
        <Header />
        {/* Place where I want to render random things ex:- Body, About , Contact us */}
        {/* {Outlet} */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  )
```

## Creating a slice
```
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    }
})
```

## Adding Reducer function
```
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {

        }
    }
})
```
- Here addItem is the action which calls an anonymous function (state, action) => { }
- action is the place where we will get the items to be added to our cart
- action contains the payload
- state is our initial state
- So we need to push actions.payload into our initial state

```
reducers: {
  addItem: (state, action) => {
    state.items.push(action.payload)
  }
}
```

- state represents the **PREVIOUS state** for now it is the initial state
-adding a **clearCart reducer** and **removeItem**
```
reducers: {
    // state represents the previous state
    addItem: (state, action) => {
      state.items.push(action.payload);
      },
      clearCart: (state, action)=>{
        state.items = []
        },
    },
```

## Export actions and reducers from this slice
```export default cartSlice.reducer;```
- combines all the reducers from cartSlice and export it as one single reducer

```export const { addItem, removeItem, clearCart} = cartSlice.actions;```
- exports the actions

## Put that Slice into store
```
import cartSlice from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        
    }
});
```

## Using slice into our Cart / subscribing to our store
```
import { useSelector } from 'react-redux';

{* (inside header component) *}
const cartItems = useSelector(store=> store.cart.items);
```

## Dispatching actions onClick event
```
import { useDispatch } from 'react-redux;
const dispatch = useDispatch();
```
- import **useDispatch** hook from **react-redux**
```
import { addItem } from '../utils/cartSlice';
```
- import addItem action from cartSlice as a named import
```
const handleAddItem = () => {
    dispatch(addItem('Grapes'));
  }
```

- handleAddItem function is triggered when add button is clicked
