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