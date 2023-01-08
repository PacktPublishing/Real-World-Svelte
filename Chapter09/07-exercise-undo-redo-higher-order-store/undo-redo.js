import { writable, get } from 'svelte/store';

export default function undoRedo(store) {
  const undoHistory = [];
  const redoHistory = [];
  const undoRedoStore = writable(get(store), (set) => {
    return store.subscribe(($store) => {
      undoHistory.push($store);
      redoHistory.length = 0; // resets redoHistory
      return set($store);
    });
  });
  function undo() {
    if (undoHistory.length <= 1) return;
    redoHistory.push(undoHistory.pop());
    undoRedoStore.set(undoHistory[undoHistory.length - 1]);
  }
  function redo() {
    if (redoHistory.length === 0) return;
    const value = redoHistory.pop();
    undoHistory.push(value);
    undoRedoStore.set(value);
  }
  return {
    ...store,
    subscribe: undoRedoStore.subscribe,
    undo: undo,
    redo: redo,
  };
}
