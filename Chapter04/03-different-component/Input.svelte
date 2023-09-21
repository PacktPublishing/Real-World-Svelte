<script>
  export let value;
  export let onChange;
</script>

<input {value} on:input={(event) => onChange(event.target.value)} />
