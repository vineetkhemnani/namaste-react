## UseEffect() without dependency array
- If we dont have a dependency array, it means useEffect() is not dependent on anything
```
useEffect(() => {

})
```
- Every time component renders, useEffect() will be called

- If we had an empty dependency array, useEffect() was called once after render