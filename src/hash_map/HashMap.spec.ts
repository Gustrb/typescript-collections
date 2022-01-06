import { HashMap } from "./HashMap";

describe(HashMap, () => {

  it('should be defined', () => {
    expect(HashMap).toBeDefined();
  });

  it('should be a class', () => {
    expect(typeof HashMap).toBe('function');
  });

  it('should be able to tell the size of a hashmap', () => {
    const hashMap = new HashMap<string, number>();
    expect(hashMap.size()).toBe(0);
  });

  it('should be able to tell wheter a hashmap is empty', () => {
    const hashMap = new HashMap<string, number>();
    expect(hashMap.isEmpty()).toBe(true);
  });

  it('should be able to insert a new value into the hash', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.size()).toBe(1);
    expect(hashMap.isEmpty()).toBe(false);
  });

  it('should be able to clear the hash', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    hashMap.clear();

    expect(hashMap.size()).toBe(0);
    expect(hashMap.isEmpty()).toBe(true);
  });

  it('should be able to put a value if it is absent', () => {
    const hashMap = new HashMap<string, number>();

    expect(hashMap.putIfAbsent('key', 1)).toBe(null);

    expect(hashMap.size()).toBe(1);
    expect(hashMap.isEmpty()).toBe(false);

    expect(hashMap.putIfAbsent('key', 2)).toBe(1);
  });

  it('should be able to get an element from the hash', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.get('key')).toBe(1);
    expect(() => hashMap.get('key2')).toThrow();
  });

  it('should be able to get an element from the hash and return a default value', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.getOrDefault('key', 2)).toBe(1);
    expect(hashMap.getOrDefault('key2', 2)).toBe(2);
  });

  it('should be able to tell wheter a map contains a key', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.containsKey('key')).toBe(true);
    expect(hashMap.containsKey('key2')).toBe(false);
  });

  it('should be able to convert a map into an array', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.toArray()).toEqual([1]);
  });

  it('should be able to tell wheter a map contains a value', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.containsValue(1)).toBe(true);
    expect(hashMap.containsValue(2)).toBe(false);
  });

  it('should be able to remove an element from the hash', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.remove('key')).toBe(1);

    expect(hashMap.size()).toBe(0);
    expect(hashMap.isEmpty()).toBe(true);
  });

  it('should be able to remove an element from the hash if it is equal to a value', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.removeIfEquals('key', 1)).toBe(true);

    expect(hashMap.size()).toBe(0);
    expect(hashMap.isEmpty()).toBe(true);
  });

  it('should be able to replace an element in the hash', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.replace('key', 2)).toBe(1);
    expect(hashMap.get('key')).toBe(2);
  });

  it('should be able to replace an element in the hash if it is equal to a value', () => {
    const hashMap = new HashMap<string, number>();
    hashMap.put('key', 1);

    expect(hashMap.replaceIfEquals('key', 1, 2)).toBe(true);
    expect(hashMap.get('key')).toBe(2);
    expect(hashMap.replaceIfEquals('key', 1, 2)).toBe(false);
  });
});
