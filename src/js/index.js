import * as todoView from './views/to_doView';
import Todo_Item from './models/To_do'

/** Global state of our app
 *  - All the active to-do items
 *  - All the completed to-do items
 *  - All the deleted to-do items
 */
const activeState = [];
const completedState = [];
const deletedState = [];

const newTodoItem = () => {
    // 1) Get the input from the UI
        const input = todoView.getInput();

    // If their is a input, then, run the code:
    if (input) {
     // 2) Clear the input field
        todoView.clearInput();

    // 3) Create a new To-Do object and store in the activeState
        const newItem = new Todo_Item(input)
        activeState.push(newItem);

    // 4) Use the object just created to display in the UI
        todoView.displayItem(newItem);
        
    } else {
        console.log('Type something');
    };

};

document.getElementById('submit__btn').addEventListener('click', e => {
    e.preventDefault();
    newTodoItem();
});