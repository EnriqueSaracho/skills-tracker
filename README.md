# Skills tracker app

This is an in-progress project. I'm trying to build an application that combines a to-do-list with a skill tracker.

## Obstacles

- Getting to add a list element to the list from the form in ToDoList.js

  - Used useState to declare to variables (text and listItems) to store the values from the textarea and the unordered list.
  - Made a function that onClick() updates both values.
  - Rendered to JSX the textarea value, the onclick() to the button, and a map function to the unordered list.

- Implementing a way for the user to add the skills involved for each task.

  - Came up with an idea to do it with checkbox, in the same form that's used to add the list element.

- How to store the value of the checkboxes inside each item.
  - Made a boolean state for each checkbox.
  - Modified addToList(), instead of text, the function adds an object **"newTask"** with a task element that equals text, and a skills object with all the checkboxes boolean values.
