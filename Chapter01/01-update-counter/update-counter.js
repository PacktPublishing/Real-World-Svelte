import { afterUpdate } from 'svelte';
import { writable } from 'svelte/store';

export function createUpdateCounter() {
  let updateCount = writable(0);
  let measuring = false;

  afterUpdate(() => {
    if (measuring) {
      updateCount.update(n => n + 1);
    }
  });

  function startMeasuring() {
    updateCount.set(0);
    measuring = true;
  }

  function stopMeasuring() {
    measuring = false;
  }

  return { updateCount, startMeasuring, stopMeasuring };
}
