# Skills tracker app

This is an in-progress project. I'm trying to build an application that combines a to-do-list with a skill tracker.

## Obstacles

- Getting to add a list element to the list from the form in ToDoList.js
  - Used useState to declare to variables (text and listItems) to store the values from the textarea and the unordered list.
  - Made a function that onClick() updates both values.
  - Rendered to JSX the textarea value, the onclick() to the button, and a map function to the unordered list.
  - Added a delete button to each of the list elements and a deleteItems() that filters every item except the one that has been pressed, using the index to identify it.
