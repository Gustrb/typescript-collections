/**
 * Generic list, can be used to store any type of data
 * based on https://docs.oracle.com/javase/7/docs/api/java/util/List.html
 */

import { Collection } from "./Collection";

export interface List<T> extends Collection<T> {
  // Appends the specified element to the end of this list (optional operation).
  add(element: T): boolean;

  // Inserts the specified element at the specified position in this list (optional operation).
  // Throws an exception if the index is out of range.
  addByIndex(index: number, element: T): void;

  // Appends all of the elements in the specified collection to the end of this list,
  // in the order that they are returned by the specified iterator (optional operation).
  addAll(elements: T[]): boolean;

  // Inserts all of the elements in the specified collection into this list
  // at the specified position (optional operation).
  // Throws an exception if the index is out of range.
  addAllFromIndex(index: number, elements: T[]): boolean;

  // Returns true if this list contains the specified element.
  contains(object: T): boolean;

  // Returns true if this list contains all of the elements of the specified collection.
  containsAll(collection: T[]): boolean

  // Returns the element at the specified position in this list.
  get(index: number): T;

  // Returns the index of the first occurrence of the specified element
  // in this list, or -1 if this list does not contain the element.
  indexOf(obj: T ): number;

  // Returns the index of the last occurrence of the specified element in this list,
  // or -1 if this list does not contain the element.
  lastIndexOf(obj: T): number;

  // Removes the element at the specified position in this list (optional operation).
  // Throws an exception if the index is out of range.
  removeFromIndex(index: number): T;

  // Removes the first occurrence of the specified element from this list, if it is present
  // (optional operation).
  remove(obj: T): boolean;

  // Removes from this list all of its elements that are contained in the
  // specified collection (optional operation).
  removeAll(elements: T[]): boolean;

  // Retains only the elements in this list that are contained in the specified collection
  // (optional operation).
  retainAll(elements: T[]): boolean;

  // Replaces the element at the specified position in this list with the specified element
  // (optional operation).
  // Throws an exception if the index is out of range.
  set(index: number, element: T): T;

  // Returns an array containing all of the elements in this list in proper sequence
  // (from first to last element).
  toArray(): T[];
}
