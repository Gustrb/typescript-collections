import { ArrayList } from "./ArrayList";

describe(ArrayList, () => {

  it('should be defined', () => {
    expect(ArrayList).toBeDefined();
  });

  it('should be instantiable', () => {
    expect(new ArrayList()).toBeInstanceOf(ArrayList);
  });

  it('should be able to get the size of the list', () => {
    const list = new ArrayList<number>();
    expect(list.size()).toBe(0);
  });

  it('should be able to add an element', () => {
    const list = new ArrayList<number>();

    expect(list.add(1)).toBe(true);
    expect(list.size()).toBe(1);
  });

  it('should be able to add a list of elements', () => {
    const list = new ArrayList<number>();

    expect(list.addAll([1, 2, 3])).toBe(true);
    expect(list.size()).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(2)).toBe(3);
  });

  it('should be able to add a list of elements from an index', () => {
    const list = new ArrayList<number>();
    list.add(1);
    list.add(2);

    list.addAllFromIndex(1, [4, 5, 6]);

    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(4);
    expect(list.get(2)).toBe(5);
    expect(list.get(3)).toBe(6);
    expect(list.get(4)).toBe(2);
  });

  it('should be convert a list into a deep copied array', () => {
    type Ref = { a: number, b: number };

    const list = new ArrayList<Ref>();
    const objectReference = { a: 1, b: 2 };
    list.add(objectReference);

    expect(list.toArray()).not.toBe([objectReference]);
  });

  it('should be able to get an element', () => {
    const list = new ArrayList<number>();
    list.add(1);

    expect(list.get(0)).toBe(1);
    expect(() => list.get(1)).toThrow();
  });

  it('should be able to set an element', () => {
    const list = new ArrayList<number>();
    list.add(1);

    expect(list.set(0, 2)).toBe(2);
    expect(list.get(0)).toBe(2);
  });

  it('should be able to add an element by index', () => {
    const list = new ArrayList<number>();
    list.add(1);

    expect(list.addByIndex(0, 2)).toBe(true);
    expect(list.get(0)).toBe(2);
    expect(list.get(1)).toBe(1);
  });

  it('should be able to clear', () => {
    const list = new ArrayList<number>();
    list.add(1);
    list.clear();

    expect(list.size()).toBe(0);
    expect(() => list.get(0)).toThrow();
  });

  it('should be able to check if an element is present in the list', () => {
    const list = new ArrayList<number>();
    list.add(1);

    expect(list.contains(1)).toBe(true);
    expect(list.contains(2)).toBe(false);
  });

  it('should be able to check if a list of elements is present in the list', () => {
    const list = new ArrayList<number>();
    list.add(1);

    expect(list.containsAll([1])).toBe(true);
    expect(list.containsAll([2])).toBe(false);
  });

  it('should be able to get the index of an element', () => {
    const list = new ArrayList<number>();
    list.add(1);

    expect(list.indexOf(1)).toBe(0);
    expect(list.indexOf(2)).toBe(-1);
  });

  it('should be able to tell wheter a list is empty', () => {
    const list = new ArrayList<number>();
    expect(list.isEmpty()).toBe(true);

    list.add(1);
    expect(list.isEmpty()).toBe(false);
  });

  it('should be able to get the last index of an element', () => {
    const list = new ArrayList<number>();
    list.add(1);

    expect(list.lastIndexOf(1)).toBe(0);
    expect(list.lastIndexOf(2)).toBe(-1);
  });

  it('should be able to remove an element from a given index', () => {
    const list = new ArrayList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.removeFromIndex(0)).toBe(1);
    expect(list.removeFromIndex(0)).toBe(2);
    expect(list.removeFromIndex(0)).toBe(3);

    expect(list.size()).toBe(0);

    list.add(1);
    list.add(3);
    expect(list.removeFromIndex(1)).toBe(3);
    expect(list.size()).toBe(1);
  });

  it('should be able to remove an element', () => {
    const list = new ArrayList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.remove(1)).toBe(true);
    expect(list.remove(4)).toBe(false);
  });

  it('should be able to remove a list of elements', () => {
    const list = new ArrayList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.removeAll([1, 2])).toBe(true);
    expect(list.removeAll([1, 2, 4])).toBe(false);
  });

  it('should remove all the elements except the retained', () => {
    const list = new ArrayList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    list.retainAll([1, 2]);

    expect(list.size()).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
  });
});
