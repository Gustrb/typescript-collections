export interface Collection<T> {
  // Removes all of the elements from this collection.
  clear(): void;

  // Returns true if this collection contains no elements.
  isEmpty(): boolean;

  // Returns the number of elements in this collection.
  size(): number;

  // Convet the collection to an array.
  toArray(): T[];
}
