import { writable } from 'svelte/store';

export default function createUndoRedoStore() {
  const store = writable();
  const undoHistory = [];
  const redoHistory = [];
  function set(value) {
    undoHistory.push(value);
    redoHistory.length = 0; // resets redoHistory
    store.set(value);
  }
  function undo() {
    if (undoHistory.length <= 1) return;
    redoHistory.push(undoHistory.pop());
    store.set(undoHistory[undoHistory.length - 1]);
  }
  function redo() {
    if (redoHistory.length === 0) return;
    const value = redoHistory.pop();
    undoHistory.push(value);
    store.set(value);
  }
  return {
    subscribe: store.subscribe,
    set: set,
    undo: undo,
    redo: redo,
  };
}
