export const getInput = () => document.getElementById("inputTodo").value;

export const clearInput = () =>
  (document.getElementById("inputTodo").value = "");

export const displayItem = item => {
  const markup = `
            <div class="border rounded p-3" id=${item.id}>
            <div class="row">
            <div class="col-sm">
                <input type="checkbox" class="form-check-input mr-3 ml-3">
            </div>
            <div class="col-sm">
                ${item.value}
            </div>
            <div class="col-sm">
                <i class="material-icons float-right deleteIcon">delete_forever</i>
            </div>
            </div>
        </div>
    `;

  document
    .querySelector(".active_to-dos")
    .insertAdjacentHTML("beforeend", markup);
};

export const deleteTodoItem = itemID => {
  const itemToBeDeleted = document.getElementById(itemID);
  itemToBeDeleted.parentNode.removeChild(itemToBeDeleted);
};

const displayDate = () => {
  var now;
  now = new Date();
  let yy = now.getFullYear();
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let mm = now.getMonth();
  let dd = now.getDate();

  let hhmm = function(date) {
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var hourMinute = hours + ":" + minutes + ampm;
    return hourMinute;
  };
  const actualTimeAndDate = `${yy}-${months[mm]}-${dd}, ${hhmm(now)}`;

  return actualTimeAndDate;
};

export const addToDeleteList = item => {
  const markup = `
            <div class="deletedyay">
            <div class="row">
            <div class="col-9 alert alert-danger">
                <del>${item.value}</del>
                <small class="text-muted"><br>${displayDate()}</small>
            </div>
            </div>
        </div>
    `;

  document
    .querySelector(".deleted_items_list")
    .insertAdjacentHTML("beforeend", markup);
};

export const addToCompletedList = item => {
  const markup = `
    <div class="completed_yay">
    <div class="row">
    <div class="col-9 alert alert-success">
        ${item.value}
        <small class="text-muted"><br>${displayDate()}</small>
    </div>
    </div>
</div>
`;

  document
    .querySelector(".completed_list")
    .insertAdjacentHTML("beforeend", markup);
};
