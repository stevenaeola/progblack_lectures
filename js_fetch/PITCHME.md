# JavaScript Client-Server Interaction {data-background-color=#7E317B}

---

## Summary

::: incremental

- Asynchronous JavaScript (AJAX)
- Fetch API
- Cross-Origin Resource Sharing
- Promises
- async and await
- Exceptions

:::

---

## Asynchronous JavaScript and XML (AJAX)

::: incremental

- Use to update part of an HTML page with the result of a request
- Client-side JavaScript sends request
- Page needs to work while waiting
- An event is triggered when response arrives
- Content of response is used to update page content
- 'Single page app'
- Mostly use JSON instead of XML these days

:::

---

## Fetch API

::: incremental

- Before ES6 most people used [jQuery for AJAX](http://api.jquery.com/category/ajax/)
- Now the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) does this natively
- Polyfill https://github.com/github/fetch works on any browser

:::

---

## Fetch example HTML

```
<body>
  <div id="content"></div>
  <button id="get">Get instruments</button>
  <script src="index.js"></script>
</body>
```

---

## Fetch client JS

```
window.addEventListener('click', function(event){
  fetch('http://127.0.0.1:8090/list')
   .then(response => response.text())
   .then(body =>
      document.getElementById('content').innerHTML=body)
});

```
Note use of => for anonymous function declaration

---

## Fetch server JS
```
const express = require('express');
const app = express();

let instruments = [ 'piano', 'concertina', 'double bass'];

app.get('/list', function (req, resp){
    resp.send(instruments);
});

app.listen(8090);

```

---

## Problem

This does not work: browser console says


> index.html:1 Access to fetch at 'http://127.0.0.1:8090/list' from
> origin 'null' has been blocked by CORS policy: No
> 'Access-Control-Allow-Origin' header is present on the requested
> resource. If an opaque response serves your needs, set the request's
> mode to 'no-cors' to fetch the resource with CORS disabled. 

---

## [Same-origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy)


- Security feature of browsers
- Asynchronous requests only to source of page
- Cross-Origin Resource Sharing (CORS) can get around it
- Or, better, serve from the same place

---

## Serving client  content through node

- Add this line to server (middleware)
```
app.use(express.static('client'));
```
- Put all static content in `client` directory
- E.g. html, client JS, CSS, images, sounds
- Access via server (without `client` in url)
```
127.0.0.1:8090/index.html
```

---

## Promises

- Fetch uses [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- Promises should make it easier to attach callbacks/handlers
- Include success and failure callbacks
- Add (chains of) success callbacks with `.then`
- Add failure callback with `.catch`
- N.B. a 404 is still counted as success

---

## catch example

Add this to handle any errors from `fetch` handler chain

```
.catch( (error) => alert(error))
```

If you want to deal with 404 errors you will have to look at `response.ok` 

---

## async and await

- New in ES2017
- Provide 'syntactic sugar' for promises `.catch`
- Use `async` keyword before `function` keyword
- use `await` keyword in execution

---

## async example

```
window.addEventListener('click', async function(event){
  let response = await fetch('http://127.0.0.1:809/list');
  let body = await response.text();
  document.getElementById('content').innerHTML=body
});
```

---

## Exceptions

What happens if things go wrong?

```
window.addEventListener('click', async function(event){
  try{
    let response = await fetch('http://127.0.0.1:809/list');
    let body = await response.text();
    document.getElementById('content').innerHTML=body;
  } catch(e) {
    alert(e);
  }
});
```

N.B. `catch` instead of Python `except`

---

## How to do the assignment

- Design HTML
- Design web service
- Join with Fetch



