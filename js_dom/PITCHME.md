# JavaScript and the DOM {data-background-color=#7E317B}

---

## Document Object Model (DOM)

::: incremental

- Internal representation of browser page
- Read contents with JavaScript
- Update contents to change page content
- Historically problematic (so [jQuery](https://jquery.com/))
- Better in ES6, now widespread
- [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document)

:::

---

## Event handling with HTML

- Add `onclick` attribute to an element
- JavaScript is executed (without separate tag)
- Note embedded single quotes

```
<html>
<button onclick="alert('Sing me a song');">
</html>

```
- See [Events and the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)
- [button.html](https://github.com/stevenaeola/progblack_lectures/blob/main/js_dom/button.html)


---

## [Identifying parts of the page: getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

`
var element = document.getElementById(id);
`
::: incremental

- In a browser you have access to the global `document` object
- `id` attribute of HTML elements should be unique
- Returns an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

:::

---


## [Identifying parts of the page: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

::: incremental

- Select item with CSS selector
- First matching element is selected
- Can use [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
   - Use `for` or `.foreach` to iterate

:::

---

## Listening for events

::: incremental

- Browsers produce events as users interact with page
- E.g. `click`, `keypress`, `focus`, `submit` see [list](https://developer.mozilla.org/en-US/docs/Web/Events)
- Use `addEventListener` to attach a function to an element
- See [button2.html](https://github.com/stevenaeola/progblack_lectures/blob/main/js_dom/button2.html)
- Better to separate JS and HTML in this way (MVC)
- How would you get a message to appear when hovering over "primary" text?

:::

---

## Waiting for the DOM to be loaded

- JS often included in `<head>`
- But DOM elements not defined when code is executed
- `document.addEventListener("DOMContentLoaded",f)`
- Handlers are often anonymous functions
    - function expression
    - arrow function expression
- See [button3.html](https://github.com/stevenaeola/progblack_lectures/blob/main/js_dom/button3.html)

---

## Manipulating the  DOM

- Change the content of an element with [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) property
- Add/remove elements with [append](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append) and [remove](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
- Change attributes e.g. class, style with [setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

---

## Summary

::: incremental

- Select parts of the page (DOM)
- Update the page (DOM)
- Attach actions (functions) to the page
- Allows for dynamic pages e.g. [Progressive Web Apps](https://web.dev/progressive-web-apps/)

:::

