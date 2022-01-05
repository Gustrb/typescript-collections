import { ArrayList } from "../array_list/ArrayList";
import { Queue } from "../interfaces/Queue";

export class ResizableArrayQueue<T> extends ArrayList<T> implements Queue<T> {

  public add(element: T): boolean {
    this.addByIndex(this.size(), element);
    return true;

  }

  public element() {
    return this.get(0);
  }

  public offer(element: T): boolean {
    this.add(element);

    // Since in this implementation, the queue is implemented as a resizablearray,
    // the queue will always be able to add an element to the tail of the queue.

    return true;
  }

  public peek(): T {
    return this.get(0);
  }

  public poll(): T {
    return this.removeFromIndex(0);
  }
}
