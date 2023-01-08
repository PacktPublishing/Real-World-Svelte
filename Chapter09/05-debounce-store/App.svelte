<script>
  import debounce from './debounce-store';

  const debouncedStore = debounce('');
</script>

<div>Store value: <input bind:value={$debouncedStore} /></div>
<div>Debounced store value: {$debouncedStore}</div>
