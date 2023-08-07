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