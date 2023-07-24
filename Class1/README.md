## What is Emmet?
An extension built into VS-code to ease developers while building apps For ex:- div>div>h1#new generates the following code
```
<div>
      <div>
        <h1 id="new"></h1>
      </div>
</div>
```

##  Difference between a Library and Framework?
A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.
*Libraries target a specific functionality, while a framework tries to provide everything required to develop a complete application.*
***React is a library not a framework***

## What is CDN? Why do we use it?
A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.

## Why is React known as React?
it's called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.

## What is crossorigin in script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
*Simply request resources from another domain*

## What is diference between React and ReactDOM
React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

## What is difference between react.development.js and react.production.js files via CDN?
The very basic difference is that Production Build has ugly, minified(compressed) version of your javascript code, so this makes rendering of file on end user's browser very quick and performance enhancing.

## What is async and defer?
**Async** - As soon as scripts are encountered,scripts are fetched from the network along with HTML parsing and only when the complete script is fetched from the network, THE HTML PARSING STOPS AND SCRIPT IS EXECUTED and AFTER SCRIPT EXECUTED HTML PARSING CONTINUES
**Defer** - The HTML continues parsing and script fetched side by side from the network ONLY AFTER COMPLETE HTML PARSED THE SCRIPT IS EXECUTED
![Alt text](Class1\async vs defer.png)
