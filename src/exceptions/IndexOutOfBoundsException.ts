export class IndexOutOfBoundsException extends Error {
  constructor(index: number) {
    super(
      `${index} is out of container's bounds.`
    );
  }
}
