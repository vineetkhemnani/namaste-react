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