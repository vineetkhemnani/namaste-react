# Class-Based Components
- Created using a javascript class
- ```import React from 'react';```
- The most important part of a class based component is the **render()** method

```
import React from 'react'

class Profile extends React.Component {
    render() {
        return(
          <h1>Profile Class Component</h1>
        )
    }
}
export default Profile
``` 
- Return some JSX from the render() method
- render() method is mandatory

## Passing props to class-based components
- we need to use the **this** keyword
```
import React from 'react'

class Profile extends React.Component {
  render() {
    return (
        <div>
            <h1>Profile Class Component</h1>
            <h3>Name: {this.props.name}</h3>
        </div>
    )
  }
}
export default Profile
```

## State in class components
- In class-based components we use a constructor to create a state
```
constructor(props){
    super(props);
    // Create state
    this.state = {
      count: 0,
    }
  }
```
Rendering
```
render() {
    return (
        <div>
            <h1>Profile Class Component</h1>
            <h3>Name: {this.props.name}</h3>
            <h4>Count: {this.state.count}</h4>
        </div>
    )
  }
```
- In React, all the states are one big object
- So we need to define all the state variables in this.state
```
constructor(props){
    super(props);
    // Create state
    this.state = {
      count: 0,
      count2: 0,
    }
  }
```
- **Even in functional components, React uses one big object to store all the state variables behind the scenes**

## Set value of state variables in class-based components
- We dont mutate state object directly
- We instead use a setState() function and pass a modified object with the changed state variable and its value
```
class Profile extends React.Component {
  constructor(props){
    super(props);
    // Create state
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
        <div>
            <h1>Profile Class Component</h1>
            <h3>Name: {this.props.name}</h3>
            <h4>Count: {this.state.count}</h4>
            <button onClick={()=>{
              // we do not mutate state directly
              // we need to use a modified object and pass it in setState() function
              this.setState(
              {
                count: 1,
              }
            )}}></button>
        </div>
    )
  }
}
```
- **NEVER MUTATE STATE DIRECTLY**
- **we cant do** ```this.state.count=1```

#### Setting multiples state variables
```
class Profile extends React.Component {
  constructor(props){
    super(props);
    // Create state
    this.state = {
      count: 0,
      count2: 0,
    }
  }
  render() {
    return (
        <div>
            <h1>Profile Class Component</h1>
            <h3>Name: {this.props.name}</h3>
            <h4>Count1: {this.state.count}</h4>
            <h4>Count2: {this.state.count2}</h4>
            <button onClick={()=>{
              // we do not mutate state directly
              // we need to use a modified object and pass it in setState() function
              this.setState(
              {
                count: 1,
                count2: 1,
              }
            )}}>Click me</button>
        </div>
    )
  }
}
```

## componentDidMount() in class-based components
- Constructor => render() => componentDidMount()
- These three methods are called **lifecycle methods** in class based components
- First constructor is called, then component renders, then componentDidMount is called
- Best place to make an **API call** is **componentDidMount()**

## Nested Class-components
- If there is a parent class-component and a child class-component
- First the parent constructor is called, then parent render() is called which contains the child class component
- Then the child contructor is called, then child render(), then child componentDidMount() and at last parent
componentDidMount() is called
- **Parent constructor => Parent render => Child constructor => Child render => Child componentDidMount() => 
ParentDidMount()**

## LifeCycle Methods
- When React is rendering things up, it does it in two phases:-
1. Render phase
2. Commit phase
### Render phase
- React first finishes the **render phase**
- The render phase includes constructor and render method
### Commit phase
- Commit phase is the phase where React is actually **modifying the DOM**
- componentDidMount() is executed after rendering the component on the browser

*Render phase is faster than commit phase as updating the DOM is a heavy task*

- When parent render is called, Child's lifecycle methods trigger, now the child constructor is called and child render is called.
- But if **first child's componentDidMount** is called, *it makes an API call and delays the rendering of second child component*, this shoud not be done
- So after first child's render method, second child's constructor is called instead of first child's componentDidMount().
- So **React batches up the render phase for the first and the second child**
- After all child have been rendered, this will be the place where React will update the DOM (commit phase)

## async componentDidMount and API calls
```
async componentDidMount() {
    // API calls
    const data = await fetch('https://api.github.com/users/vineetkhemnani')
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
  }
```
- The above code is preceded by **async** keyword which delays the data and hence the parent componentDidMount is called meanwhile the data in child componentDidMount is processing
- When we make an API call, the component is already mounted we just need to update it
- **Child constructor=> child render() => child componentDidMount() => API call => componentDidMount() => render()**
- **componentDidUpdate()** => called after each render after initial render
- as soon as we move to new page, **componentWillUnmount()** method is called
![lifecyclemethods](https://github.com/vineetkhemnani/namaste-react/assets/78949423/94435176-00bc-4e14-b9a2-69d5fe1286fd)


- componentDidMount() is called after initial render and componentDidUpdate() is called after every subsequent render
- When we write modern React code they remove the concept of lifecycle methods

## useEffect() with dependency array in lifecycle methods

```
async componentDidMount() {
    // API calls
    const data = await fetch('https://api.github.com/users/vineetkhemnani')
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    // if(this.state.count!==prevState.count)
  }
```

is equivalent to
```
useEffect(()=>{

},[count])
```
## componentWillUnmount() and useEffect()
- We can return a function from useEffect which acts as componentWillUnmount() and is called when we leave the page.
```
useEffect(()=>{
  setInterval(()=>{
    console.log("Namaste React");
  }, 1000);

return ()=>{
  clearInterval(timer);
}
},[])
```