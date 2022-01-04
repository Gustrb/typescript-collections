import { Stackable } from "../interfaces/Stack";
import { ArrayList } from "../array_list/ArrayList";
import { EmptyStackException } from "../exceptions/EmptyStackException";

export class Stack<T> extends ArrayList<T> implements Stackable<T> {
  public empty() {
    return this.isEmpty();
  }

  public peek(): T {
    if (this.empty()) {
      throw new EmptyStackException('peek');
    }

    return this.get(this.size() - 1);
  }

  public pop() {
    if (this.empty()) {
      throw new EmptyStackException('pop');
    }

    return this.removeFromIndex(this.size() - 1);
  }

  public push(element: T) {
    this.add(element);
    return element;
  }

  public search(object: T) {
    return this.indexOf(object) + 1;
  }
}
