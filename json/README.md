# JSON: JavaScript Object Notation



## Summary


- Human- and machine- readable and writable
- Used for storage and transmission of data
- Language agnostic
- Alternative to XML in AJAX
- JavaScript methods `JSON.stringify` and `JSON.parse`
- Equivalents in [python](https://docs.python.org/3/library/json.html), [Java](https://github.com/FasterXML/jackson) etc



## What does it look like?

- Plain text
- Encodes objects, lists, strings, numbers, boolean, null
- Does not encode functions
- Read the [language summary](https://www.json.org/json-en.html)
- Subset of object literal notation in JavaScript
  - Object keys need to be in (double) quotes


## Sending JSON with fetch

- Set method to `POST`
- Set `'Content-Type': 'application/json'` in headers
- Use [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to encode body
- See [postStuff example](./postStuff.js)
- Note use of [httpbin](https://httpbin.org) for testing client without a server

## Using JSON response to update DOM (client)

- Get JSON from server
- Use [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) to make an Array/Object
- Iterate through the response with 
  - [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) for an Array
  - [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) for an Object
- Create/append/update DOM nodes based on result
- Could use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) to update [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

## JSON with express (server)

Add middleware for JSON body parsing

```
app.use(express.json());
```

Then access `req.body` within a `.post` route.

To send JSON jwith express either
- use [res.json](https://expressjs.com/en/api.html#res.json)
- pass [res.send](https://expressjs.com/en/api.html#res.send) an Array or Object

## Writing JSON to a file

- Server-side only (nodejs)
- Convert object to JSON with `JSON.stringify`
- Use `writeFileSync` from the `fs` module

```
const fs = require('fs');
let data = JSON.stringify([1, 2, 3]);
fs.writeFileSync('./file.json', data);
```

## Loading JSON from a file

- Server-side only (nodejs)
- Could load a file and then use `JSON.parse`
- Or simply

```const jsonContent = require("./file.json");```



