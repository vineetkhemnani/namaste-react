- **Any piece of JSX can have only one parent**
- We can wrap some elements inside a div but that looks ugly
## React.Fragment
- We use **React.Fragment** instead of div to wrap
- React.Fragment is a component imported from react
```<React.Fragment><React.Fragment/>```
- React.Fragment is like an empty tag
```
const jsx = (
  <React.Fragment>
  <h1>JSX</h1>
  <h1>Second JSX</h1>
  </React.Fragment>
)
```
or simply use\
**SHORTHAND**
```
const jsx = (
  <>
  <h1>JSX</h1>
  <h1>Second JSX</h1>
  </>
)
```
## INLINE-STYLE in REACT
We need to define style inside a javascript object and pass that object to the style tag
<div style={{backgroundColor: "red"}}></div>
```
const jsx = (
  <div style={{
    backgroundColor: "red",
  }}>
  <h1>JSX</h1>
  <h1>Second JSX</h1>
  </div>
)
```

**Arrays are rendered into html without a space or comma so we use .join(", ")**
- All the frontend is controlled by a backend configuration and this is known as **CONFIG DRIVEN UI**
- CONFIG DRIVEN UI example may be displaying a carousel on swiggy offers for one city and not for another

## Optional Chaining (?.)
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

## Props
- Props are nothing but attributes passed to a function
- Attributes passed to a function call can received as props in the functional component
```
const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard restaurant={restaurants[0]} />
      <RestaurantCard restaurant={restaurants[1]} />
      <RestaurantCard restaurant={restaurants[2]} />
      <RestaurantCard restaurant={restaurants[3]} />
      <RestaurantCard restaurant={restaurants[4]} />
      <RestaurantCard restaurant={restaurants[5]} />
    </div>
  )
}
```
Now these will be available in RestaurantCard component as a **prop** and can be accessed
```
const RestaurantCard = (props) => {
  console.log(props.restaurant.info)
  return (
    <div className="card">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          props.restaurant.info?.cloudinaryImageId
        }
        alt=""
      />
      <h2>{props.restaurant.info?.name}</h2>
      <h3>{props.restaurant.info?.cuisines.join(', ')}</h3>
      <h4>{props.restaurant.info?.avgRating} stars</h4>
    </div>
  )
}
```
## Destructuring objects inside props
```
const RestaurantCard = ({restaurant}) => {
  // console.log(restaurant.info)
  const {name, cuisines,avgRating,cloudinaryImageId} = restaurant.info;
  return (
    <div className="card">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
        alt=""
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  )
}
```

## Destructing object in parameters (props) and calling all objects dynamically


## Virtual DOM
- Representation of the DOM in our code