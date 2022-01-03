/**
 * Generic list, can be used to store any type of data
 * Based on https://docs.oracle.com/javase/7/docs/api/java/util/List.html
 */

export interface List<T> {
  // Appends the specified element to the end of this list (optional operation).
  add(element: T): boolean;

  // Inserts the specified element at the specified position in this list (optional operation).
  addByIndex(index: number, element: T): void;

  // Appends all of the elements in the specified collection to the end of this list,
  // in the order that they are returned by the specified iterator (optional operation).
  addAll(elements: T[]): boolean;

  // Inserts all of the elements in the specified collection into this list
  // at the specified position (optional operation).
  addAllFromIndex(index: number, elements: T[]): boolean;

  // Removes all of the elements from this list (optional operation).
  clear(): void;

  // Returns true if this list contains the specified element.
  contains(object: Object): boolean;

  // Returns true if this list contains all of the elements of the specified collection.
  containsAll(collection: T[]): boolean

  // Compares the specified object with this list for equality.
  equals(obj: Object): boolean;

  // Returns the element at the specified position in this list.
  get(index: number): T;

  // Returns the index of the first occurrence of the specified element
  // in this list, or -1 if this list does not contain the element.
  indexOf(obj: Object ): number;

  // Returns true if this list contains no elements.
  isEmpty(): boolean;

  // Returns the index of the last occurrence of the specified element in this list,
  // or -1 if this list does not contain the element.
  lastIndexOf(obj: Object): number;

  // Removes the element at the specified position in this list (optional operation).
  removeFromIndex(index: number): T;

  // Removes the first occurrence of the specified element from this list, if it is present
  // (optional operation).
  remove(obj: Object): boolean;

  // Removes from this list all of its elements that are contained in the
  // specified collection (optional operation).
  removeAll(elements: T[]): boolean;

  // Retains only the elements in this list that are contained in the specified collection
  // (optional operation).
  retainAll(elements: T[]): boolean;

  // Replaces the element at the specified position in this list with the specified element
  // (optional operation).
  set(index: number, element: T): T;

  // Returns the number of elements in this list.
  size(): number;

  // Returns an array containing all of the elements in this list in proper sequence
  // (from first to last element).
  toArray(): T[];
}
