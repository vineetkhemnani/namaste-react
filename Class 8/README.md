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
Rendering\
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


