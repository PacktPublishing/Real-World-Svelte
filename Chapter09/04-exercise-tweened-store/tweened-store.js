import { writable } from 'svelte/store';

export default function createTweenedStore(initialValue, duration = 200) {
  let value = initialValue;
  let targetValue = value;
  let startTime;
  let startValue;
  let frameId = null;
  const store = writable(initialValue);
  function loop() {
    frameId = null;

    const timeDelta = Math.min((Date.now() - startTime) / duration, 1);
    if (timeDelta < 1) {
      value = timeDelta * (targetValue - startValue) + startValue;
      store.set(value);
      frameId = requestAnimationFrame(loop);
    } else {
      store.set(targetValue);
    }
  }
  function set(newValue) {
    if (frameId !== null) cancelAnimationFrame(loop);

    startTime = Date.now();
    startValue = value;
    targetValue = newValue;
    frameId = requestAnimationFrame(loop);
  }

  return {
    subscribe: store.subscribe,
    set: set,
  };
}
