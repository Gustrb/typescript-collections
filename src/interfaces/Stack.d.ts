/**
 *  Interface for a stack data structure.
 *  Based on the Stack class from the Java collections library.
 *  Reference: https://docs.oracle.com/javase/7/docs/api/java/util/Stack.html
 */
export interface Stackable<T> {
  // Tests if this stack is empty.
  empty(): boolean;

  // Looks at the object at the top of this stack without removing it from the stack.
  // Throws EmptyStackException if this stack is empty.
  peek(): T;

  // Removes the object at the top of this stack and returns that object as the value of this function.
  // Throws EmptyStackException if this stack is empty.
  pop(): T;

  // Pushes an item onto the top of this stack.
  push(element: T): T;

  // Returns the 1-based position where an object is on this stack.
  search(object: T): number;
}
