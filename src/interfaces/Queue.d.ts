/**
 * Generic Queue, can be used to store any type of data
 * based on https://docs.oracle.com/javase/7/docs/api/java/util/Queue.html
*/
export interface Queue<T> {
  // Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and throwing an IllegalStateException if no space is currently available.
  add(element: T): boolean;

  // Retrieves, but does not remove, the head of this queue.
  element(): T;

  // Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions.
  offer(element: T): boolean;

  // Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
  peek(): T;

  // Retrieves and removes the head of this queue, or returns null if this queue is empty.
  poll(): T;

  // Retrieves and removes the head of this queue.
  remove(): T;
}
