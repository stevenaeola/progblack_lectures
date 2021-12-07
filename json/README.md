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
  - Object keys need to be in quotes


## Sending JSON with fetch

- Set method to `post`
- Set `'Content-Type': 'application/json'`
- Use `JSON.stringify` to encode body
- See [postStuff example](./postStuff.js) 

## Receiving JSON with express

Add middleware for JSON body parsing

```
app.use(express.json());
```

Then access `req.body` within a `.post` route

## Writing JSON to a file

- Convert object to JSON with `JSON.stringify`
- Use `writeFileSync` from the `fs` module

```
const fs = require('fs');
let data = JSON.stringify([1, 2, 3]);
fs.writeFileSync('./file.json', data);
```

## Loading JSON from a file

- Could load a file and then use `JSON.parse`
- Or simply

```const jsonContent = require("./file.json");```

