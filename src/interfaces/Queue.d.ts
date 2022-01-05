import { List } from "./List";

/**
 * Generic Queue, can be used to store any type of data
 * based on https://docs.oracle.com/javase/7/docs/api/java/util/Queue.html
*/
export interface Queue<T> extends List<T> {
  // Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions,
  // returning true upon success and throwing an IllegalStateException if no space is currently available.
  add(element: T): boolean;

  // Retrieves, but does not remove, the head of this queue.
  // Throws ArrayIndexOutOfBoundsException if this queue is empty.
  element(): T;

  // Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions.
  offer(element: T): boolean;

  // Retrieves, but does not remove, the head of this queue
  // throws exception of queue is empty.
  peek(): T;

  // Retrieves and removes the head of this queue,
  // throws exception if queue is empty.
  poll(): T;
}
