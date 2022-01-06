import { Collection } from "./Collection";

export interface Map<Key, Value> extends Collection<Value> {

  // Returns true if this map contains a mapping for the specified key.
  containsKey(key: Key): boolean;

  // Returns true if this map maps one or more keys to the specified value.
  containsValue(value: Value): boolean;

  // Returns a Set view of the mappings contained in this map.
  // Set<Map.Entry<K,V>>	entrySet()

  // Performs the given action for each entry in this map until all entries have been processed or the action throws an exception.
  // default void	forEach(BiConsumer<? super K,? super V> action)

  // Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
  get(key: Key): Value;

  // Returns the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key.
  getOrDefault(key: Key, defaultValue: Value): Value;

  // Returns a Set view of the keys contained in this map.
  // Set<K>	keySet()

  // Associates the specified value with the specified key in this map (optional operation).
  put(key: Key, value: Value): Value;

  // If the specified key is not already associated with a value (or is mapped to null) associates it with the given value and returns null, else returns the current value.
  putIfAbsent(key: Key, value: Value): Value;

  // Removes the mapping for a key from this map if it is present (optional operation).
  remove(key: Key): Value;

  // Removes the entry for the specified key only if it is currently mapped to the specified value.
  remove(key: Key, value: Value): boolean;

  // Replaces the entry for the specified key only if it is currently mapped to some value.
  replace(key: Key, value: Value): Value;

  // Replaces the entry for the specified key only if currently mapped to the specified value.
  replaceIfEquals(key: Key, oldValue: Value, newValue: Value): boolean;

  // Replaces each entry's value with the result of invoking the given function on that entry until all entries have been processed or the function throws an exception.
  // void	replaceAll(BiFunction<? super K,? super V,? extends V> function)
}
