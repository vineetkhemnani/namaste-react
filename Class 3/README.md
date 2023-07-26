**browsersList** handles for which older browsers our code should work in.\
**babel** uses this browsersList to convert newer code into older versions of code.\
We do not need to write polyfills, Babel does it for us.\
*Create a start script in package.json to skip writing the entire command*\
```"start":"parcel index.html"```
Now instead of writing ```npx parcel index.html```\
We can write ```npm run start``` to execute above