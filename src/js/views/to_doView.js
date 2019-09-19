export const getInput = () => document.getElementById("inputTodo").value;

export const clearInput = () => {
  document.getElementById("inputTodo").value = "";
  document.getElementById("inputTodo").focus();
};

export const displayItem = item => {
  const markup = `
            <ul id=${item.id}>
                <li>
                  <div class="new_test">
                    <a href="#"><span class="dot" id="fake_check"></span></a>
                    <p>${item.value}</p>
                    <a href="#"
                      ><img src="img/3 Delete btn.png" alt="" class="delete_img"
                    /></a>
                  </div>
                </li>
              </ul>
    `;

  document
    .querySelector(".active_list")
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
  const actualTimeAndDate = `${yy}-${months[mm]}-${dd} | ${hhmm(now)}`;

  return actualTimeAndDate;
};

export const addToDeleteList = item => {
  const markup = `
            <ul>
                <li>
                    <div class="new_test">
                        <p>${item.value}</p><span class="date_time">${displayDate()}</span>
                    </div>
                </li>
            </ul>
    `;

  document
    .querySelector(".deleted_list")
    .insertAdjacentHTML("beforeend", markup);
};

export const addToCompletedList = item => {
  const markup = `
            <ul>
                   <li>
                     <div class="new_test">
                      <img src="img/success icon.png" alt="" class="sucess_img">
                       <p>${item.value}</p><span class="date_time">${displayDate()}</span>
                        </div>
                   </li>
            </ul>
`;

  document
    .querySelector(".completed_list")
    .insertAdjacentHTML("beforeend", markup);
};

export const whenActiveIsCliked = () => {
  const active = document.querySelector(".active_list");
  active.classList.remove("hide_me");

  const completed = document.querySelector(".completed_list");
  completed.classList.add("hide_me");

  const deleted = document.querySelector(".deleted_list");
  deleted.classList.add("hide_me");

  const inputArea = document.querySelector(".input_test");
  inputArea.classList.remove("hide_me");
};

export const whenCompletedIsCliked = () => {
  const active = document.querySelector(".active_list");
  active.classList.add("hide_me");

  const completed = document.querySelector(".completed_list");
  completed.classList.remove("hide_me");

  const deleted = document.querySelector(".deleted_list");
  deleted.classList.add("hide_me");

  const inputArea = document.querySelector(".input_test");
  inputArea.classList.add("hide_me");
};

export const whenDeletedIsCliked = () => {
  const active = document.querySelector(".active_list");
  active.classList.add("hide_me");

  const completed = document.querySelector(".completed_list");
  completed.classList.add("hide_me");

  const deleted = document.querySelector(".deleted_list");
  deleted.classList.remove("hide_me");

  const inputArea = document.querySelector(".input_test");
  inputArea.classList.add("hide_me");
};
