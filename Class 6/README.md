The most expensive operation in UI state change is the **DOM Manipulation**.
- ***React is fast because of its fast DOM manipulation***
- Virtual DOM
- Reconciliation
- Tree Diffing algorithm
- React re renders the entire component on every key press and it does it very fast

## useEffect hook 
useEffect() hook takes 2 parameters:-
- Callback function
- dependency array
```
useEffect((callback function)=>{
  console.log("render");
},[dependency_array]);
```
- The callback function is called on every re- render
- Suppose we want to call this useEffect() on a certain condition, we pass that it in the dependency array
```
useEffect((callback function)=>{
  console.log("call this when dependency is changed");
},[**searchText**]);
```
- Now the useEffect callback is triggered whenever there is a change in the **searchText** state variable
- If it is not dependent on anything, it is called once (dependency empty)
- When empty dependency array, callback function called once after render
- When array => [searchText] => once after render + everytime fter re-render when my searchText changes

## Shimmer UI
- A shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up.
- It gives people an idea of whats about to come and whats happening (its currently loading) when a page full of content/data takes more than 3-5 seconds to load.

## Conditional Rendering
If restaurant is empty => shimmer UI
if restaurant has data => actual data UI

## JavaScript inside {}
- only JavaScript expressions work
```
{
let a = 10;
console.log(a);
}
```
- Above doesnt work as not a valid javascript expression
- above are statements

```
((a=10), console.log(a))
```
-We can write this to make it work
