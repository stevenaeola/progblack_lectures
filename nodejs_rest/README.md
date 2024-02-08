# REST 

## [Representational State Transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)


## Summary

- Architectural style for web services
- Provides interoperability (language independent)
- Uses http methods (GET, POST, PUT, DELETE ...)
- Like function call
  - Parameters provided in URL (GET) or body (POST) 
  - Results provided in body
- Published as an API e.g. [twitter](https://developer.twitter.com/en/docs/api-reference-index), [github](https://developer.github.com/v3/), [gmail](https://developers.google.com/gmail/api/v1/reference/)


## Implementing a REST API in nodejs

- Think about your entities
- GET methods for listing/searching and detail
- POST method(s) for adding/updating
- DELETE method (not necessary for the assignment)
- Need to thing about http response code e.g.
  - 200 for OK (sent by default in express)
  - 403 for unauthorised
  - 400 for other request error
- Extract parameters; send response


## REST parameters

- For GET methods we have [already talked about this](https://github.com/stevenaeola/progblack_lectures/blob/main/js_intro_node/README.md)
- For POST methods you will need to configure body parser for [urlencoding](https://github.com/stevenaeola/proglabs_js/tree/master/node_routing) and/or JSON

```
app.use(express.json());
```

- Access values with `req.body.var_name`

See also [tutorial on nodejs to build a REST API](https://codeburst.io/node-js-by-example-part-1-668376cd4f96)


## REST and Single Page App

- In a single page app reduce traffic by updating content rather than reloading
- Access REST methods directly from client (using fetch)
- Problem: if we use a form it gets submitted and loads 'action' page
- Solution: stop default form action (client-side)
```
event.preventDefault();
```

or

```
event.stopPropogation();
```


## Sending POST data from a form as JSON

- Use a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object to extract all inputs
- Turn this into an object with [Object.fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
- Turn this into a string with [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- Make sure the headers in your fetch set the content type to be application/json
- Make sure your server is using the [express.json middleware](https://expressjs.com/en/api.html#express.json)