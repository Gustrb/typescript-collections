export class EmptyStackException extends Error {
  constructor(method: string) {
    super(`Stack is empty. Cannot ${method}`);
  }
}
