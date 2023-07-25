## Bundler
In the original create-react-app, the bundler is **WEBPACK**/
Other bundlers include parcel, vite etc

## ***installing parcel as a dev dependency***/
```
npm i -D parcel
```

## Caret and Tilde in version
*Caret(^)- means it will update major versions*\
*Tilde(~)- represents it will upgrade to minor versions*\
~version - “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.\

^version - “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.\

## package-lock.json
locks the dependencies to a current version to prevent blunder
- locks the version
- do not keep in .gitignore
- it also maintains a hash of the dependency("integrity") (to check the exact same version is on production or not)

## node_modules
database for npm installs\
**WE do not put node_modules in github as our package-lock.json contains sufficient information to create node_modules**
