export class KeyNotFoundException extends Error {
  constructor(key: string) {
    super(`Key ${key} not found`);
  }
}
