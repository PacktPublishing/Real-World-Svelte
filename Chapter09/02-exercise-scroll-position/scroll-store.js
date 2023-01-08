import { readable } from 'svelte/store';

export default function createStore() {
  return readable(window.scrollY, (set) => {
    const onScroll = (event) => set(window.scrollY);
    document.addEventListener('scroll', onScroll, false);
    return () => {
      document.removeEventListener('scroll', onScroll, false);
    };
  });
}
