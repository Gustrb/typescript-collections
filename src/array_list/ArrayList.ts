import { List } from "../interfaces/List";

export class ArrayList<T> implements List<T> {
  public add(element: T): boolean {
    throw new Error("Method not implemented.");
  }

  public addByIndex(index: number, element: T): void {
    throw new Error("Method not implemented.");
  }

  public addAll(elements: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  public addAllFromIndex(index: number, elements: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  public clear(): void {
    throw new Error("Method not implemented.");
  }

  public contains(object: T): boolean {
    throw new Error("Method not implemented.");
  }

  public containsAll(collection: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  public get(index: number): T {
    throw new Error("Method not implemented.");
  }

  public indexOf(obj: T): number {
    throw new Error("Method not implemented.");
  }

  public isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }

  public lastIndexOf(obj: T): number {
    throw new Error("Method not implemented.");
  }

  public removeFromIndex(index: number): T {
    throw new Error("Method not implemented.");
  }

  public remove(obj: T): boolean {
    throw new Error("Method not implemented.");
  }

  public removeAll(elements: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  public retainAll(elements: T[]): boolean {
    throw new Error("Method not implemented.");
  }

  public set(index: number, element: T): T {
    throw new Error("Method not implemented.");
  }

  public size(): number {
    throw new Error("Method not implemented.");
  }

  public toArray(): T[] {
    throw new Error("Method not implemented.");
  }
}
