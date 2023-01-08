import { readable } from 'svelte/store';

export default function createClickCounterStore() {
  let clickCount = 0;
  return readable(clickCount, (set) => {
    const onClick = () => set(++clickCount);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  });
}
