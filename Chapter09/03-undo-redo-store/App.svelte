<script>
  import createUndoRedoStore from './undo-redo-store';
  const store = createUndoRedoStore();
</script>

<input bind:value={$store} />
<button on:click={store.undo}>Undo</button>
<button on:click={store.redo}>Redo</button>
