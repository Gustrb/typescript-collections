import { IndexOutOfBoundsException } from "../exceptions/IndexOutOfBoundsException";
import { List } from "../interfaces/List";

export class ArrayList<T> implements List<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  public add(element: T) {
    this.list.push(element);
    return true;
  }

  public addByIndex(index: number, element: T) {
    this.list.splice(index, 0, element);
    return true;
  }

  public addAll(elements: T[]) {
    elements.forEach(element => this.add(element));
    return true;
  }

  public addAllFromIndex(index: number, elements: T[]) {
    let currentIndex = index;

    elements.forEach(element => {
      this.addByIndex(currentIndex, element);
      currentIndex++;
    });

    return true;
  }

  public clear() {
    this.list = [];
  }

  public contains(object: T) {
    return this.list.includes(object);
  }

  public containsAll(collection: T[]) {
    const contains = collection.every(element => this.contains(element));
    return contains;
  }

  public get(index: number) {
    if (this.isIndexOutOfBounds(index)) {
      throw new IndexOutOfBoundsException(index);
    }

    return this.list[index];
  }

  public indexOf(object: T) {
    return this.list.indexOf(object);
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public lastIndexOf(object: T) {
    return this.list.lastIndexOf(object);
  }

  public removeFromIndex(index: number) {
    if (this.isIndexOutOfBounds(index)) {
      throw new IndexOutOfBoundsException(index);
    }

    const removed = this.list.splice(index, 1);
    return removed[0];
  }

  public remove(obj: T) {
    const index = this.indexOf(obj);

    if (index == -1) {
      return false;
    }

    this.removeFromIndex(index);

    return true;
  }

  public removeAll(elements: T[]) {
    let removed = true;
    elements.forEach(element => removed &&= this.remove(element));

    return removed;
  }

  public retainAll(elements: T[]) {
    const retained = this.list.filter(element => elements.includes(element));
    this.list = retained;

    return true;
  }

  public set(index: number, element: T) {
    if (this.isIndexOutOfBounds(index)) {
      throw new IndexOutOfBoundsException(index);
    }

    this.list[index] = element;
    return element;
  }

  public size() {
    return this.list.length;
  }

  public toArray() {
    return this.getDeepCopiedList();
  }

  private getDeepCopiedList() {
    // Nifty trick to deep copy an array
    // Stringify the array, parse it, and return the result, for sure not the most
    // optimal solution, but it works.
    return JSON.parse(JSON.stringify(this.list));
  }

  private isIndexOutOfBounds(index: number) {
    return index < 0 || index >= this.list.length;
  }
}
