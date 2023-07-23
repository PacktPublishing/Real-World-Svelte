/**
 * In svelte, by default, the derived store will get updated
 * even though the object reference is the same.
 * This is because Svelte allows mutation to modify the object,
 * and has no idea if the object has been modified.
 * 
 * In this demo, we will be creating a new `personalDetails` / `socials` object
 * whenever we update them.
 * 
 * So this function is to compare the object reference,
 * and only call the `set` function of the derive store to update the derived store
 * only when the object reference has changed.
 */
export function compareReference(getter) {
  let value;
  return function (newStoreValue, set) {
    const newValue = getter(newStoreValue);
    if (value === undefined) {
      value = newValue;
      set(newValue);
    } else if (value !== newValue) {
      value = newValue;
      set(newValue);
    }
  }
}
