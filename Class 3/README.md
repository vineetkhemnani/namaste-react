- **browsersList** handles for which older browsers our code should work in.
- **babel** uses this browsersList to convert newer code into older versions of code.
- We do not need to write polyfills, Babel does it for us.
- *Create a start script in package.json to skip writing the entire command*\
```"start":"parcel index.html"```
- Now instead of writing ```npx parcel index.html```
We can write ```npm run start``` to execute above
- Similarly for a build script instead of ```npx parcel build index.html``` we can create a build command ```"build": "parcel build index.html"```
- npx = npm run or simply npm
```npm run start``` or ```npm start```
- console.log() are not automatically removed. They need to be configured to remove by a package called ***babel-plugin-transform-remove-console***
- Install babel-plugin-transform-remove-console
```npm install babel-plugin-transform-remove-console --save-dev```
- Create .babelrc file which will contain the configurations

## Warning in the console
- Whenever we pass an array to be returned to render for example: in App.js
[heading,heading2], we need to specify key: value pairs inside each element (heading) to prevent the warning.
- This warning is due to the fact that **REACT HAS TO RE-RENDER EVERYTHING IN CASE OF new CHILDREN AND THIS MAKES CODE INEFFICIENT**
- React will have to re render the DOM tree if no key props
- If you implement it naively, inserting an element at the beginning has worse performance. For example, converting between these two trees works poorly:
```
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```
React will mutate every child instead of realizing it can keep the <li>Duke</li> and <li>Villanova</li> subtrees intact. This inefficiency can be a problem.

## Keys
In order to solve this issue, React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key to our inefficient example above can make the tree conversion efficient:
```
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```
Now React knows that the element with key '2014' is the new one, and the elements with the keys '2015' and '2016' have just moved.
**React keeps a track of our key**


## JSX
- JSX is not HTML inside JavaScript but it is **HTML-like syntax**