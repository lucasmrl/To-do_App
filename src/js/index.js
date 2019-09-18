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

window.addEventListener("load", () => {
  const testAct = localStorage.getItem("active");
  const testDel = localStorage.getItem("deleted");
  const testComp = localStorage.getItem("completed");

  if (testAct !== null) {
    JSON.parse(localStorage.getItem("active")).forEach(el => {
      todoView.displayItem(el);
      activeState.push(el);
    });
  }

  if (testDel !== null) {
    JSON.parse(localStorage.getItem("deleted")).forEach(el => {
      todoView.addToDeleteList(el);
      deletedState.push(el);
    });
  }

  if (testComp !== null) {
    JSON.parse(localStorage.getItem("completed")).forEach(el => {
      todoView.addToCompletedList(el);
      completedState.push(el);
    });
  }
});

document.getElementById("delete_hist").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

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

    // Saves every new active item to the Local Storage
    localStorage.setItem("active", JSON.stringify(activeState));
  } else {
    console.log("Type something");
  }
};

document.getElementById("submit__btn").addEventListener("click", e => {
  e.preventDefault();
  newTodoItem();
});

/* Deleted Items
 *
 *
 */

document.querySelector(".active_list").addEventListener("click", e => {
  const newItemDel = [];

  // Get the ID of the to-do item
  const itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;
  const reject = e.target.id;

  if (itemID && reject != "fake_check") {
    // With the ID, I find the INDEX in the activeState of that item
    const indexOfItem = activeState.findIndex(x => x.id === itemID);

    // Copy the item to the deleted State
    deletedState.push(activeState[indexOfItem]);

    //Remove from the UI and Display the item on the "Deleted List"
    todoView.deleteTodoItem(itemID);
    todoView.addToDeleteList(activeState[indexOfItem]);

    // Then I remove that object from the activeState
    activeState.splice(indexOfItem, 1);
    localStorage.setItem("active", JSON.stringify(activeState));
    localStorage.setItem("deleted", JSON.stringify(deletedState));
  }
});

/* Completed Items
 *
 *
 */

document.querySelector(".active_list").addEventListener("click", e => {
  const newItemCompleted = [];

  // Get the ID of the to-do item
  const itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;
  const check = e.target.id;

  if (itemID && check === "fake_check") {
    // With the ID, I find the INDEX in the activeState of that item
    const indexOfItem = activeState.findIndex(x => x.id === itemID);

    // Copy the item to the completed State
    completedState.push(activeState[indexOfItem]);

    //Remove from the UI and Display the item on the "Deleted List"
    todoView.deleteTodoItem(itemID);
    todoView.addToCompletedList(activeState[indexOfItem]);

    // Then I remove that object from the activeState
    activeState.splice(indexOfItem, 1);
    localStorage.setItem("active", JSON.stringify(activeState));
    localStorage.setItem("completed", JSON.stringify(completedState));
  }
});

// Vertical Tab

document.getElementById("active_link").addEventListener("click", () => {
  todoView.whenActiveIsCliked();
});

document.getElementById("completed_link").addEventListener("click", () => {
  todoView.whenCompletedIsCliked();
});

document.getElementById("deleted_link").addEventListener("click", () => {
  todoView.whenDeletedIsCliked();
});
