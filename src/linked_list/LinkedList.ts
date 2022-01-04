import { List } from "../interfaces/List";
import { IndexOutOfBoundsException } from "../exceptions/IndexOutOfBoundsException";
import { Node } from "./Node";

export class LinkedList<T> implements List<T> {
  private head: Node<T>;
  private tail: Node<T>;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public add(element: T) {
    const node = new Node<T>();
    node.value = element;

    this.length++;

    if (!this.head) {
      this.head = node;
      this.tail = node;

      return true;
    }

    this.tail.next = node;
    this.tail = node;
    return true;
  }

  public addByIndex(index: number, element: T) {
    if (this.indexOutOfBounds(index)) {
      throw new IndexOutOfBoundsException(index);
    }

    // create the new node
    const newNode = new Node<T>();
    newNode.value = element;

    this.length++;

    // if the index is 0, add the new node to the head
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }

    // if the index is the same as the length, add the new node to the tail
    if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // if the index is in the middle, add the new node to the middle
    let currentNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    let aux = currentNode.next;

    currentNode.next = newNode;
    newNode.next = aux;
  }

  public addAll(elements: T[]) {
    elements.forEach(element => this.add(element));
    return true;
  }

  public addAllFromIndex(index: number, elements: T[]) {
    if (index < 0) {
      throw new IndexOutOfBoundsException(index);
    }

    let actualIndex = index;
    elements.forEach(element => {
      this.addByIndex(actualIndex++, element)
    });
    return true;
  }

  clear() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  public contains(object: T) {
    const contained = this.toArray().includes(object);
    return contained;
  }

  public containsAll(collection: T[]) {
    const contains = collection.every(element => this.contains(element));
    return contains;
  }

  public get(index: number): T {
    if (this.indexOutOfBounds(index)) {
      throw new IndexOutOfBoundsException(index);
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }

  private indexOutOfBounds(index: number) {
    return index < 0 || index >= this.length;
  }

  public indexOf(object: T) {
    const index = this.toArray().findIndex(element => element === object);
    return index;
  }

  public isEmpty() {
    return this.length === 0;
  }

  public lastIndexOf(obj: T) {
    const index = this.toArray().lastIndexOf(obj);
    return index;
  }

  public removeFromIndex(index: number) {
    if (this.indexOutOfBounds(index)) {
      throw new IndexOutOfBoundsException(index);
    }

    let currentNode = this.head;

    this.length--;

    if (index === 0) {
      let aux = this.head.value;

      this.head = currentNode.next;

      return aux;
    }

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    const removedNode = currentNode.next;
    currentNode.next = removedNode.next;

    return removedNode.value;
  }

  public remove(object: T) {
    if (this.isEmpty()) {
      return false;
    }

    if (this.indexOf(object) === -1) {
      return false;
    }

    let currentNode = this.head;

    if (currentNode.value === object) {
      this.head = currentNode.next;
      this.length--;
      return true;
    }

    while (currentNode.next) {
      if (currentNode.next.value === object) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return true;
      }

      currentNode = currentNode.next;
    }

    return true;
  }

  public removeAll(elements: T[]) {
    let removed = true;
    elements.forEach(element => removed &&= this.remove(element));
    return removed;
  }

  public retainAll(elements: T[]): boolean {
    const array = this.toArray();
    const retained = array.filter(element => elements.includes(element));

    this.clear();
    this.addAll(retained);

    return true;
  }

  public set(index: number, element: T) {
    if (this.indexOutOfBounds(index)) {
      throw new IndexOutOfBoundsException(index);
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    const oldValue = currentNode.value;
    currentNode.value = element;

    return oldValue;
  }

  public size() {
    return this.length;
  }

  public toArray() {
    const array: T[] = [];

    for (let i = 0; i < this.length; i++) {
      array.push(this.get(i));
    }

    return array;
  }
}
