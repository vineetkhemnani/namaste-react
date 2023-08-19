# Test cases for React

## React Testing Library
- New way of writing react
- build on top of **jest** (uses jest behind the scenes)
- adding new features doesnt break the existing ones
- replacement for enzyme

## Types of Testing
- manual testing
- automated testing - code to test code (selenium)
- end to end testing - stimulates a user's activities (cyprus)
                     - covers entire user's journey
                     - uses a headless browser - faster because it does not have to paint anything on the viewport but it will have everything else i.e. diff algorithm, virtual DOM, reconciliation
- unit testing - testing a part of code whether card/component is loading or not
- integration testing - testing integration between components

## Jest
- Jest is a delightful Javascript Testing Framework with a focus on simplicity

## Installing react-testing-library and jest
```
npm install --save-dev @testing-library/react
npm i -D jest
```

## Configuring jest
- Executing jest --init once to create a jest config file
```npx jest --init```
- It will ask us certain questions
- We wont use Typescript so no for typescript
- Test environment - jsdom (browser-like)
- Add coverage reports - Yes
- Provider to instrument code for coverage- babel
- Automatically clear mock calls, instances, contexts and results before every test? - Yes

- ***jest.config.js is created***

## Run test cases
- in package.json, we set up our test command
  test: "jest"
  so we can simply do ```npm run test```
- We get this error ***jest-environment-jsdom no longer shipped***
  fix by installing ```npm i -D jest-environment-jsdom```
- Now the command works but no test cases checked as it checks the ***__tests__*** folder

## Create our first test
- Create a folder **__tests__**
- Convention - filename.test.js
- jest now tracks all the files with *.test.js* as test case files
- sum.test.js works as a test case file for sum.js
- Writing test cases
```
test("Check sum of 2 numbers",() => {
  expect(sum(2,5)).toBe(7);
})
```
- Inside test(), we expecct a string and a function
- Inside the function, we expect something
  Here we are expecting this to call our sum function with (2,5) as parameters and return 7

- We run into an error  **SyntaxError: Cannot use import statement outside a module**
- We take the help of babel to resolve this (search babel jest config)
- Install ```npm install --save-dev babel-jest @babel/core @babel/preset-env```
- Configure babel.config.js or .babelrc
```"presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]```
- .babelrc takes a JSON
- the test cases run in browser like test-Environment called **jsdom**
- JSdom is like a small machine which is running our code
- coverage report is generated in coverage folder

## Writing Test Cases for Header
1. Expect Header to be loaded
  in Jsdom, we dont have a root to do root.render() so instead we use ***render() from react-testing-library***
  ```import { render } from '@testing-library/react';```
  ```
  test("check if header is getting rendered", () => {
    const heading = render(<Heading/>);
  })
  ``` 
  - Trying to render heading we get jsx not supported, so we need another library in presets in .babelrc
    - ```npm i -D @babel/preset-react```
  ```
  {
  "presets": [
    ["@babel/preset-env", { "targets": { "node": "current" } }],
    ["@babel/preset-react", {"runtime": "automatic"}]
  ]
}
```
- Now we get image not supported or not recognized
so we add a jest config called **moduleNameMapper{}**
  ```
  moduleNameMapper: {
    "\\.(jpg|png|svg)$": "./mocks/dummyLogo.js"
  },
  ```

- Now it cant find react-redux and Provider needed as we are in our small container jsdom and it does not know about AppLayout, Body etc
  So we wrap it in a Provider and provide store object as prop
  ```
  const header = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
  ```
  

- Another error as Router is not configured (we used createBrowserRouter in React)
  We need to StaticRouter here using ```import {StaticRouter} from 'react-router-dom/server';```
  - The **StaticRouter** can work without browser
  ```
  const header = render(
      <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
      </StaticRouter>
    )
  ```

- Now we check elements inside Header component for example:- logo by testId
  ```
  const logo = header.getAllByTestId("logo");
  ```
  and pass **data-testid="logo"** to the logo image element inside the main Header component
```
const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe('http://localhost/dummy.png')
```
  
2. Expect cart items to be 0
3. Default status should be Online
