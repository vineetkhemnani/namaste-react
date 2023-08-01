## UseEffect() without dependency array
- If we dont have a dependency array, it means useEffect() is not dependent on anything
```
useEffect(() => {

})
```
- if we have no dependency array, Every time component renders, useEffect() will be called

- **If we had an empty dependency array, useEffect() was called once after initial render**
- If we have dependency in the array, useEffect is called once after initial render and each time the dependency changes

## NEVER CREATE A COMPONENT INSIDE A COMPONENT
## NEVER CREATE A USESTATE() INSIDE IF ELSE
- React wont know whether the variable will be there or not as ***React doesnt like inconsistencies***
## NEVER WRITE USESTATE() INSIDE A FOR-LOOP
## NEVER USE USESTATE() OUTSIDE FUNCTIONAL COMPONENT