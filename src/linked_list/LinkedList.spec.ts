import { LinkedList } from "./LinkedList";

describe(LinkedList, () => {

  it('should be defined', () => {
    expect(LinkedList).toBeDefined();
  });

  it('should be able to instantiate a number list', () => {
    expect(new LinkedList<number>()).toBeDefined();
  });

  it('should start the list with size 0', () => {
    const list = new LinkedList<number>();
    expect(list.size()).toBe(0);
  });

  it('should increment the size when adding elements', () => {
    const list = new LinkedList<number>();
    list.add(1);
    expect(list.size()).toBe(1);

    list.add(2);
    expect(list.size()).toBe(2);
  });

  it('should be able to fetch an element from the list', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);

    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
  });

  it('should throw an exception when accessing indexes out of range', () => {
    const list = new LinkedList<number>();

    expect(() => list.get(0)).toThrow();
    expect(() => list.get(1)).toThrow();
    expect(() => list.get(-1)).toThrow();
  })

  it('should be able to add elements to the list', () => {
    const list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });

  it('should be able to add elements by their index', () => {
    const list = new LinkedList<number>();
    list.add(1);

    list.addByIndex(0, 0);
    list.addByIndex(1, 1);
    list.addByIndex(2, 2);

    expect(list.get(0)).toBe(0);
    expect(list.get(1)).toBe(1);
    expect(list.get(2)).toBe(2);
    expect(list.get(3)).toBe(1);
  });

  it('it should be able to add a list of elements by the starting index', () => {
    const list = new LinkedList<number>();
    list.add(1);
    list.add(2);

    list.addAllFromIndex(1, [4, 5, 6]);

    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(4);
    expect(list.get(2)).toBe(5);
    expect(list.get(3)).toBe(6);
    expect(list.get(4)).toBe(2);
  });

  it('should be able to add a list of elements to the list', () => {
    const list = new LinkedList<number>();
    list.addAll([1, 2, 3, 4]);

    expect(list.get(0)).toBe(1);
    expect(list.get(3)).toBe(4);
  });

  it('should be able to remove an element from a given index', () => {
    const list = new LinkedList<number>();

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

  it('should be able to clear a list', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    list.clear();

    expect(list.size()).toBe(0);
  });

  it('should be able to convert into an array', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it('should be able to tell wheter it contains an element', () => {
    const list = new LinkedList<number>();

    list.add(1);

    expect(list.contains(1)).toBe(true);
    expect(list.contains(4)).toBe(false);
  });

  it('should be able to tell wheter it contains a list of elements', () => {
    const list = new LinkedList<number>();

    list.addAll([1, 2, 3]);

    expect(list.containsAll([1, 2, 3])).toBe(true);
    expect(list.containsAll([1, 2, 4])).toBe(false);
  })

  it('should be able to tell wheter a list is empty', () => {
    const list = new LinkedList<number>();
    expect(list.isEmpty()).toBe(true);

    list.add(1);
    expect(list.isEmpty()).toBe(false);
  });

  it('should be able to set a value', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    list.set(0, 4);
    list.set(1, 5);
    list.set(2, 6);

    expect(list.get(0)).toBe(4);
    expect(list.get(1)).toBe(5);
    expect(list.get(2)).toBe(6);
  });

  it('should be able to find the index of an element', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(1);

    expect(list.indexOf(1)).toBe(0);
    expect(list.indexOf(2)).toBe(1);
    expect(list.indexOf(3)).toBe(2);
  });

  it('should be able to find the last index of an element', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(1);

    expect(list.lastIndexOf(1)).toBe(3);
    expect(list.lastIndexOf(2)).toBe(1);
    expect(list.lastIndexOf(3)).toBe(2);
  });

  it('should be able to remove an element', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.remove(1)).toBe(true);
    expect(list.remove(4)).toBe(false);
  });

  it('should be able to remove a list of elements', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.removeAll([1, 2])).toBe(true);
    expect(list.removeAll([1, 2, 4])).toBe(false);
  });

  it('should remove all the elements except the retained', () => {
    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    list.retainAll([1, 2]);

    expect(list.size()).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
  });
});
