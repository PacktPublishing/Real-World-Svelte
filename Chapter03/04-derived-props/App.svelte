<script>
  import Component from './Component.svelte';
  let value = 5;
</script>

<label>
  value:
  <input bind:value type="number" />
</label>

<Component bind:value />
