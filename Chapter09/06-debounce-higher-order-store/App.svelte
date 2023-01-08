<script>
  import { writable } from 'svelte/store';
  import debounce from './debounce-store';

  const store = writable('');
  const debouncedStore = debounce(store);
</script>

<div>Store value: <input bind:value={$store} /></div>
<div>Debounced store value: {$debouncedStore}</div>
