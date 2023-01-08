<script>
  import undoRedo from './undo-redo';
  const store = undoRedo(writable(''));
</script>

<input bind:value={$store} />
<button on:click={store.undo}>Undo</button>
<button on:click={store.redo}>Redo</button>
