# jspm-es6-demo

This is a playground for testing out jspm and ES6 with TypeScript in an Angular project.

## Prerequisites

You must have [Node](https://nodejs.org/en/) and [Gulp](http://gulpjs.com/) installed, and should have [TSD](https://github.com/DefinitelyTyped/tsd) installed.
 
## Getting started

```
> jspm install
> npm install
> tsd install angular angular-ui-router
```

## Mock server

There is a mock REST server under `/mockserver`. Run this by:

```
> cd mockserver
> npm install
> node server
```

## Running the application

```
> gulp
```

Open a browser at [http://localhost:8080/](http://localhost:8080/).

