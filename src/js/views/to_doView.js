export const getInput = () => document.getElementById('inputTodo').value;

export const clearInput = () => document.getElementById('inputTodo').value = '';

export const displayItem = (item) => {
    const markup = `
            <div class="border rounded p-3" data-itemid=${item.id}>
            <div class="row">
            <div class="col-sm">
                <input type="checkbox" class="form-check-input mr-3 ml-3" id="exampleCheck1">
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

    document.querySelector('.active_to-dos').insertAdjacentHTML('beforeend', markup);
}