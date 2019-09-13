import * as todoView from "./views/to_doView";
import Todo_Item from "./models/To_do";

/** Global state of our app
 *  - All the active to-do items
 *  - All the completed to-do items
 *  - All the deleted to-do items
 */
const activeState = [];
const completedState = [];
const deletedState = [];

// window.addEventListener('load', () => {
//     localStorage.removeItem('loglevel');
//     localStorage.removeItem('loglevel:webpack-dev-server');

//     if (localStorage){
//         const newArray = JSON.parse(localStorage.getItem('active'));
//         newArray.forEach(el => activeState.push(el)); 
//         activeState.forEach(el => todoView.displayItem(el));

//         const newArrayDeleted = JSON.parse(localStorage.getItem('deleted'));
//         console.log(newArrayDeleted);
//         newArrayDeleted.forEach(el => deletedState.push(el)); 
//         deletedState.forEach(el => todoView.addToDeleteList(el));

//         const newArrayCompleted = JSON.parse(localStorage.getItem('completed'));
//         newArrayCompleted.forEach(el => completedState.push(el)); 
//         completedState.forEach(el => todoView.addToCompletedList(el));
//     };

// });

/* Active To-Do Items
 */

const newTodoItem = () => {
  // 1) Get the input from the UI
  const input = todoView.getInput();

  // If their is a input, then, run the code:
  if (input) {
    // 2) Clear the input field
    todoView.clearInput();

    // 3) Create a new To-Do object and store in the activeState
    const newItem = new Todo_Item(input);
    activeState.push(newItem);

    // 4) Use the object just created to display in the UI
    todoView.displayItem(newItem);
  } else {
    console.log("Type something");
  }
};

document.getElementById("submit__btn").addEventListener("click", e => {
  e.preventDefault();
  newTodoItem();
  
  // Saves every new active item to the Local Storage
  //localStorage.setItem('active', JSON.stringify(activeState));
});

/* Deleted Items
 *
 *
 */

document.querySelector(".active_to-dos").addEventListener("click", e => {
  const newItemDel = [];

  // Get the ID of the to-do item
  const itemID = e.target.parentNode.parentNode.parentNode.id;
  const reject = e.target.type;

  if (itemID && reject != "checkbox") {
    // With the ID, I find the INDEX in the activeState of that item
    const indexOfItem = activeState.findIndex(x => x.id === itemID);

    // Copy the item to the deleted State
    deletedState.push(activeState[indexOfItem]);

    //Remove from the UI and Display the item on the "Deleted List"
    todoView.deleteTodoItem(itemID);
    todoView.addToDeleteList(activeState[indexOfItem]);

    // Then I remove that object from the activeState
    activeState.splice(indexOfItem, 1);
    // localStorage.setItem('active', JSON.stringify(activeState));
    // localStorage.setItem('deleted', JSON.stringify(deletedState));

  }
});

/* Completed Items
 *
 *
 */

document.querySelector(".active_to-dos").addEventListener("click", e => {
  const newItemCompleted = [];

  // Get the ID of the to-do item
  const itemID = e.target.parentNode.parentNode.parentNode.id;
  const check = e.target.type;

  if (itemID && check === "checkbox") {
    // With the ID, I find the INDEX in the activeState of that item
    const indexOfItem = activeState.findIndex(x => x.id === itemID);

    // Copy the item to the completed State
    completedState.push(activeState[indexOfItem]);

    //Remove from the UI and Display the item on the "Deleted List"
    todoView.deleteTodoItem(itemID);
    todoView.addToCompletedList(activeState[indexOfItem]);

    // Then I remove that object from the activeState
    activeState.splice(indexOfItem, 1);
    // localStorage.setItem('active', JSON.stringify(activeState));
    // localStorage.setItem('completed', JSON.stringify(completedState));
   
  }
});
