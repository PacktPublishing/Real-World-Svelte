<script>
  export let value;
  export let onChange;
</script>

<input
  type="checkbox"
  checked={value}
  on:change={(event) => onChange(event.target.checked)}
/>
