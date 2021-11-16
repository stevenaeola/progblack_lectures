# Introduction to nodejs {data-background-color=#7E317B}

![.](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png){width=40%}

---

## What and Why?

::: incremental

  - Server-side scripting in JavaScript: alternative to php, asp, RoR
  - Single thread execution: non-blocking
  - Not designed for compute-heavy applications
  - Package manager npm claims to be largest ecosystem of open source libraries in the world

:::

---

## History

::: incremental

  - Developed from 2009
  - Based on Chrome V8 Javascript engine: compiles to machine code
  - Originally by Joyent, part of [OpenJS foundation](https://openjsf.org/)
  - [Major fork in 2014](https://flaviocopes.com/node-history/) to io.js, since merged
  - MIT-style licence
  - Package manager [npm](https://www.npmjs.com/) (and [yarn](https://yarnpkg.com/)). See [left pad incident](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm)

:::

---

## Hosting

::: incremental

- Cross-platform installation available for local hosting
- Available on many PaaS installations e.g. openshift, IBM bluemix
- Not as widely available as php but more than most others (my opinion/experience)

:::

---

## Hello world

```
console.log("Hello world")
```

::: incremental

- Save in hello.js
- run with ```node hello.js``` or via VSC
- uses terminal as console instead of browser tools

:::

---

## Web server

```
http = require("http")

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
```

---

- Use module http, based on CommonJS
- Module = file
- `require` returns a js object that contains the module components
- modules are installed with npm if necessary (plus dependencies)
- node starts its own web server rather than running as an apache module (like php often is)


---

## Event loop

::: incremental

- node runs on an event loop
- callbacks are associated with events
- programs should be non-blocking so that callbacks are provided for things like
  - block of data arrives from file
  - block of data arrives from REST request
  - results data arrives from database request
- callbacks can themselves trigger new events
- next instruction is executed once all callbacks are complete

:::

---

![nodejs threading model](https://i.stack.imgur.com/YCTgK.png)

Thanks to [SO user568109](http://stackoverflow.com/questions/14795145/how-the-single-threaded-non-blocking-io-model-works-in-node-js)

---

# Routing requests

---

## Why express?

::: incremental

- Variables can be GET-encoded
- In REST APIs they are often included in the URL directly (without question marks)
- E.g. use [twitter API](https://developer.twitter.com/en/docs/api-reference-index)
- We want to use routing to pick bits out of the URL for this in nodejs
- There is a commonly used package called [express](https://expressjs.com/)

:::

---

# npm packages

- npm is your friend
- Dependencies are stored in package.json
- Uses [semantic versioning](http://semver.org)
  - Code should have public API by version
  - Version is X.Y.Z
  - X = major version, Y = minor version, Z = patch
  - Never change code within version once released

---

- version semantics
  - X = 0 for pre-release versions
  - Increase Z for bug-fixes, no new functionality
  - Increase Y, set Z=0 for backwards-compatibile new functionality
  - Increase X, set Y=Z=0 for backwards-incompatible new functionality
- In package.json can use tilde to match minor version, caret to match major version etc


---

# Install express

```
npm init
```

creates package.json

```
npm install express
```

installs express package and its dependencies

```
npm install express --save
```

installs and puts dependency in package.json

---

# Express routing

```
var express = require('express')
var app = express()

app.get('/', function(req, resp){
  resp.send('Hello world')
})

app.listen(8090)
```
This just starts an express app handling GET requests via port 8090

---

```
var express = require('express')
var app = express()

app.get('/random/:max', function(req, resp){
  max = parseInt(req.params.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via url is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

app.get('/r', function(req, resp){
  max = parseInt(req.query.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via query is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

app.listen(8090)
```

::: incremental

- Adds two separate routes
- Extract max value in two different ways
- Via value in URL (:max)
- Via value in GET-encoded variable

:::

---

# In Summary

  - nodejs provides server-side JavaScript
  - npm is the package manager
  - servers can run locally or remotely
  - express is a very popular package for routing requests

