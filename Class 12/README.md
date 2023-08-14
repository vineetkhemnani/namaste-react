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
- Suppose we have dispatched an action called **addItem** which calls a function and this function will modify our cart