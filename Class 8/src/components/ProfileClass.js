import React from 'react'

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
            )}}>Click me</button>
        </div>
    )
  }
}
export default Profile
