export default class Stack {
  constructor() {
    this.top = -1;
    this.items = {};

    function peek() {
      return this.items[this.top];
    }

    function push(value) {
      this.top += 1;
      this.items[this.top] = value;
    }
  }
}
