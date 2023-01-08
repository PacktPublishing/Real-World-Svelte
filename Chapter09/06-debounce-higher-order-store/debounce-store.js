import { derived } from 'svelte/store';

export default function debounce(store) {
  const debounced = derived(store, (value, set) => {
    let timeoutId = setTimeout(() => {
      timeoutId = null;
      set(value);
    }, 200);
    return () => {
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  });
  return {
    ...store,
    subscribe: debounced.subscribe,
  };
}
