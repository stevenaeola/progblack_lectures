

# HTTP {data-background-color=#7E317B}

---

## Possible responses from a web request

Responses include ...

<http://pollev.com/stevenaeola>

---


## Sources of requests

How might http requests be generated?

---

## Hypertext Transfer Protocol (HTTP) basics

::: incremental

-  Underlies many aspects of the web
-  Based around sockets (usually port 80 for web pages)
-  Fairly stable:
    - HTTP 0.9 (1991)
    - HTTP 1.0 (1996)
    - HTTP 1.1 (1997)
    - HTTP 2.0 (2015/2020)
-  Commonly accepted extensions: cookies 

:::

---

## HTTP: more

- HTTP 2 approved in 2015, including compression, push, pipelining and multiplexing
-  For full details see <https://tools.ietf.org/html/rfc7540>
-  For tutorial see <http://www.jmarshall.com/easy/http/>
-  Some knowledge important for web apps
-  Not just for HTML, but general resource (uRl)

---

## Overview


- Client/Server: (usually) no response without request
- Requests and responses have similar format:
    - __Request/Status Line__ including HTTP version and Status Codes for response
    - __Headers__ including the host in HTTP 1.1, allowing for multiple sites on same IP
    - __Blank Line__
- Can run manually using curl
- Default port number is 80 (443 for https)

---

## curl requests

At a command prompt:

```
  curl -v google.coom
  curl -v gooogle.com
  curl -v google.com
  curl -v www.google.com
```

---

## Request types include

- __GET__ most common
- __POST__ for some forms
- __HEAD__ to check if a page exists
- __PUT__ replace (rarely used outside web services)
- __PATCH__ update (rarely used outside web services)
- __DELETE__ rarely used outside web services

Headers can include cookie values

URLs can include GET-encoded variables

---

## Response

Response Codes

- __100-199__ Informational (e.g. continue). Client should respond
- __200-299__ Successful
- __300-399__ File has moved (permanently or temporarily)
- __400-499__ Client error (401 Unauthorised, 403 Forbidden, 404 Not Found)
- __500-599__ Server error

Headers can include setting cookie values

---

## Summary

- A web server responds to http requests, usually on port 80
- Request provides data in header and (possibly) body
- Response provides data in body and (possibly) header