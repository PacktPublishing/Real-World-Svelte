<script>
  export let value;
  $: double = value * 2;
  $: triple = value * 3;
  function updateValueFromDouble(double) {
    value = double / 2;
  }
  function updateValueFromTriple(triple) {
    value = triple / 3;
  }
</script>

<label>
  double: 
  <input
    value={double}
    type="number"
    on:change={(e) => updateValueFromDouble(e.target.value)}
  />
</label>
<label>
  triple: 
  <input
    value={triple}
    type="number"
    on:change={(e) => updateValueFromTriple(e.target.value)}
  />
</label>
