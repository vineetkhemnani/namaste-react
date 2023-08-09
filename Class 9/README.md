# Custom Hooks
- create custom hooks to increase
  1. readability
  2. maintainability
  3. modularity
  4. reusability
- The hook filename should start with "use"

## Implement useOnline() custom hook
```
import {useState, useEffect} from 'react';
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(()=>{
    window.addEventListener('online',()=>{
        setIsOnline(true);
    })
    window.addEventListener('offline',()=>{
        setIsOnline(false);
    })
  },[]);
  return isOnline;
}
export default useOnline
```
**In body, conditional rendering**
```
const isOnline = useOnline();
  if(!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }
```
## Cleaning up code
```
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(()=>{
    const handleOnline = () => {
      setIsOnline(true);
    }
    const handleOffline = () => {
      setIsOnline(false)
    }
    window.addEventListener('online',handleOnline);
    window.addEventListener('offline',handleOffline);
    return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
    }
  },[]);
  return isOnline;
}
```

## Bundlers and one js file
- Parcel creates only a single js file for all our code
- This makes our code very slow and is not a good practice for scalable, production ready apps

## Chunking/ Code Splitting/ Dynamic Bundling/ Lazy Loading/ On-Demand Loading/ Dynamic Import
- Load the component only when it is needed
- ```import { lazy } from 'react';```
as a named import
- ```const Instamart = lazy(()=> import('./components/Instamart'));```
**imports it as a lazy load component**
- When we demand load a component/script, React stops loading it altogether 
- Once it has loaded, it doesnt need to load again as React application is a **Single page application**
- Upon on demand loading => upon render => React suspends loading
- React loads it after 27ms until then it shows error
- To fix this, we use **Suspense**
import { Suspense } from 'react';
- React lazy loads/ on demand loads whatever is inside <Suspense></Suspense>
```
{
        path: '/Instamart',
        element: (
          <Suspense>
            <Instamart/>
          </Suspense>
        ),
      },
```
- Here the Instamart component lazy loads
- The <Suspense> takes props which define what will be displayed till we lazy load as **fallback**
```
{
        path: '/Instamart',
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart/>
          </Suspense>
        ),
      },
```
