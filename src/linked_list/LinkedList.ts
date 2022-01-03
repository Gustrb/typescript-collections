import { List } from "../interfaces/List";

export class LinkedList<T> implements List<T> {
  add(element: T): boolean {
    throw new Error("Method not implemented.");
  }

  addByIndex(index: number, element: T): void {
    throw new Error("Method not implemented.");
  }

  addAll(elements: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  addAllFromIndex(index: number, elements: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  clear(): void {
    throw new Error("Method not implemented.");
  }

  contains(object: Object): boolean {
    throw new Error("Method not implemented.");
  }

  containsAll(collection: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  equals(obj: Object): boolean {
    throw new Error("Method not implemented.");
  }

  get(index: number): T {
    throw new Error("Method not implemented.");
  }

  indexOf(obj: Object): number {
    throw new Error("Method not implemented.");
  }

  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }

  lastIndexOf(obj: Object): number {
    throw new Error("Method not implemented.");
  }

  removeFromIndex(index: number): T {
    throw new Error("Method not implemented.");
  }

  remove(obj: Object): boolean {
    throw new Error("Method not implemented.");
  }

  removeAll(elements: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  retainAll(elements: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  set(index: number, element: T): T {
    throw new Error("Method not implemented.");
  }

  size(): number {
    throw new Error("Method not implemented.");
  }

  toArray(): T[] {
    throw new Error("Method not implemented.");
  }
}
