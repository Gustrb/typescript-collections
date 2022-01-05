import { ArrayList } from "../array_list/ArrayList";
import { ResizableArrayQueue } from "./ResizableArrayQueue";

describe(ResizableArrayQueue, () => {

  it('should be defined', () => {
    expect(ResizableArrayQueue).toBeDefined();
  });

  it('should be a class', () => {
    expect(typeof ResizableArrayQueue).toBe('function');
  });

  it('should be a class that extends ArrayList', () => {
    const queue = new ResizableArrayQueue<number>();
    expect(queue instanceof ArrayList).toBe(true);
  });

  it('should be able to the queue', () => {
    const queue = new ResizableArrayQueue<number>();
    expect(queue.size()).toBe(0);

    queue.add(1);
    expect(queue.size()).toBe(1);
  });

  it('should add an element to the tail of the queue', () => {
    const queue = new ResizableArrayQueue<number>();

    queue.add(1);
    queue.add(2);
    expect(queue.get(0)).toBe(1);
  });

  it('should be able to retrieve the next element(the head)', () => {
    const queue = new ResizableArrayQueue<number>();

    queue.add(1);
    queue.add(2);
    expect(queue.element()).toBe(1);
  });

  it('should throw ArrayIndexOutOfBounds when retrieving the element on an empty queue', () => {
    const queue = new ResizableArrayQueue<number>();

    expect(() => queue.element()).toThrow();
  });

  it('should be able to offer an element to the tail of the queue', () => {
    const queue = new ResizableArrayQueue<number>();

    queue.add(1);
    queue.add(2);
    expect(queue.offer(3)).toBe(true);
  });

  it('should be able to peek at the next element(the head)', () => {
    const queue = new ResizableArrayQueue<number>();

    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toBe(1);
  });

  it('should throw ArrayIndexOutOfBounds when peeking on an empty queue', () => {
    const queue = new ResizableArrayQueue<number>();
    expect(() => queue.peek()).toThrow();
  });

  it('should be able to poll the next element(the head)', () => {
    const queue = new ResizableArrayQueue<number>();

    queue.add(1);
    queue.add(2);
    expect(queue.poll()).toBe(1);

    expect(queue.size()).toBe(1);

    expect(queue.poll()).toBe(2);
    expect(queue.size()).toBe(0);

    expect(() => queue.poll()).toThrow();
  });
});
