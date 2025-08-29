1. **getElementById, getElementsByClassName, and querySelector / querySelectorAll** are all methods used to select elements from the DOM. The main differences are the following:

### Answer:

- `getElementById` returns only the first element with the specified ID, whereas `getElementsByClassName` return all elements with the specified class name.
- `querySelector` returns the first element that matches the specified CSS selector, whereas `querySelectorAll` returns all elements that match the css selector.

2. How do you **create and insert a new element into the DOM**?

### Answer:

To create and insert a new element into the DOM, you can use the following steps:

1. Create a new element using the `createElement` method.
2. Set the element's attributes using the `setAttribute` method.
3. Append the element to the parent element using the `appendChild` method.

Here's an example:

```javascript
// Create a new element
const newElement = document.createElement("div");

// Set the element's attributes
newElement.setAttribute("id", "new-element");
newElement.setAttribute("class", "new-class");

// Append the element to the parent element
const parentElement = document.getElementById("parent");
parentElement.appendChild(newElement);
```

This will create a new `div` element with the ID `new-element` and the class `new-class`, and append it to the `parent` element.

3. What is **Event Bubbling** and how does it work?

### Answer:

Event bubbling is a mechanism in which an event is propagated from the child element to its parent elements. This means that the event is first captured by the child element, and then propagated up to its parent elements.

When an event is captured by an element, it first executes its own event handler, and then checks if it has any parent elements. If it does, it bubbles the event up to the parent element. The event is then captured by the parent element, and so on, until it reaches the `window` object.

The `event.stopPropagation()` method can be used to prevent the event from bubbling up to the parent element.

4. What is **Event Delegation** in JavaScript? Why is it useful?

### Answer:

Event delegation is a technique in which event listeners are attached to a parent element, rather than to each individual child element. This allows for more efficient event handling, as only one event listener needs to be added to the parent element, rather than to each child element.

Event delegation is useful in situations where you have a large number of child elements that need to be handled by the same event. By using event delegation, you can reduce the amount of code you need to write and maintain.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Answer:

The `preventDefault()` method is used to prevent the default behavior of an event. For example, if a link is clicked, the default behavior is to navigate to the URL specified in the `href` attribute. If you call `preventDefault()` on a link click event, the default behavior will not occur.

The `stopPropagation()` method is used to stop the event from bubbling up to the parent element. If you call `stopPropagation()` on a click event, the event will not propagate to the parent element.
