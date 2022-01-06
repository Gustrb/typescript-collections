import { KeyNotFoundException } from "../exceptions/KeyNotFoundException";
import { Map } from "../interfaces/Map";

export class HashMap<Key extends { toString() : string }, Value> implements Map<Key, Value> {
  private innerMap: { [key: string]: Value } = {};

  public containsKey(key: Key) {
    try {
      this.get(key);
      return true;
    } catch {
      return false;
    }
  }

  public containsValue(value: Value) {
    return this.toArray().includes(value);
  }

  public get(key: Key) {
    const stringfiedKey = key.toString();

    if (!this.innerMap[stringfiedKey]) {
      throw new KeyNotFoundException(stringfiedKey);
    }

    return this.innerMap[stringfiedKey];
  }

  public getOrDefault(key: Key, defaultValue: Value) {
    try {
      return this.get(key);
    } catch {
      return defaultValue;
    }
  }

  public put(key: Key, value: Value): Value {
    const stringfiedKey = key.toString();

    if (!this.innerMap[stringfiedKey]) {
      this.innerMap[stringfiedKey] = value;
    }

    return this.innerMap[stringfiedKey];
  }

  public putIfAbsent(key: Key, value: Value): Value {
    const stringfiedKey = key.toString();

    if (!this.innerMap[stringfiedKey]) {
      this.innerMap[stringfiedKey] = value;
      return null;
    }

    return this.innerMap[stringfiedKey];
  }

  public remove(key: Key) {
    const stringfiedKey = key.toString();

    if (!this.innerMap[stringfiedKey]) {
      throw new KeyNotFoundException(stringfiedKey);
    }

    const value = this.innerMap[stringfiedKey];
    delete this.innerMap[stringfiedKey];

    return value;
  }

  public removeIfEquals(key: Key, value: Value) {
    try {
      const hasTheSameValueAsInMap = this.get(key) === value;

      if (hasTheSameValueAsInMap) {
        this.remove(key);
        return true;
      }
    } catch {
      return false;
    }

    return false;
  }

  public replace(key: Key, value: Value) {
    const stringfiedKey = key.toString();

    if (!this.innerMap[stringfiedKey]) {
      throw new KeyNotFoundException(stringfiedKey);
    }

    const oldValue = this.innerMap[stringfiedKey];
    this.innerMap[stringfiedKey] = value;

    return oldValue;
  }

  public replaceIfEquals(key: Key, oldValue: Value, newValue: Value) {
    try {
      const hasTheSameValueAsInMap = this.get(key) === oldValue;

      if (hasTheSameValueAsInMap) {
        this.replace(key, newValue);
        return true;
      }
    } catch {
      return false;
    }

    return false;
  }

  public clear() {
    this.innerMap = {};
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public size() {
    return Object.keys(this.innerMap).length;
  }

  toArray(): Value[] {
    return Object.values(this.innerMap);
  }
}
