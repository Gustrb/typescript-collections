import { Stack } from "./Stack";

describe(Stack, () => {

  it('should be defined', () => {
    expect(Stack).toBeDefined();
  });

  it('should be a class', () => {
    expect(typeof Stack).toEqual('function');
  });

  it('should be an instance of Stack', () => {
    const stack = new Stack<number>();
    expect(stack instanceof Stack).toBeTruthy();
  });

  it('should be able to push an element', () => {
    const stack = new Stack<number>();

    stack.push(1);

    expect(stack.peek()).toEqual(1);
    expect(stack.size()).toEqual(1);
  });

  it('should be able to pop an element', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.size()).toEqual(2);
  });

  it('should throw an error when popping from an empty stack', () => {
    const stack = new Stack<number>();

    expect(() => stack.pop()).toThrow();
  });

  it('should be able to search for an element', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.search(2)).toEqual(2);
  });

  it('should be able to peek at the top of the stack', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
  });

  it('should throw an exception when peeking at an empty stack', () => {
    const stack = new Stack<number>();

    expect(() => stack.peek()).toThrow();
  });

  it('should be able to test if the stack is empty', () => {
    const stack = new Stack<number>();

    expect(stack.empty()).toBeTruthy();
    stack.push(1);
    expect(stack.empty()).toBeFalsy();
  });
});
