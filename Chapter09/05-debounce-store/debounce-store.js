import { derived } from 'svelte/store';

export default function debounce(initialValue) {
  const debounced = writable(initialValue, () => {
    return () => {
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  });
  let timeoutId;
  function set(value) {
    if (timeoutId !== null) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      debounced.set(value);
    }, 200);
  }

  return {
    subscribe: debounced.subscribe,
    set: set,
  };
}
