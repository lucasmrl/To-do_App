import uniqid from "uniqid";

export default class Todo_Item {
  constructor(value) {
    this.id = uniqid();
    this.value = value;
  }
}
