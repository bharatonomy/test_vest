class Stack {
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

// Used to state what we are testing
describe("My Stack", () => {
  let stack;

  // Helper Function
  beforeEach(() => {
    let stack = new Stack();
  });

  // Implementation of an individual test
  it("is created empty", () => {
    // const stack = new Stack();

    expect(stack.top).toBe(-1); // toBe equates completely
    expect(stack.items).toEqual({}); // toEqual requires a equivalent value
  });

  it.todo("can push to the top", () => {
    stack.push("Item0");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("Item0");
  });

  //   it("can pop off");
});
