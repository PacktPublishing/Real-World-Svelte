<script>
  let type = 'button'; // could be 'div', 'p', 'a', etc.
</script>

<select bind:value={type}>
	<option value="button">button</option>
	<option value="div">div</option>
	<option value="p">p</option>
	<option value="a">a</option>
</select>

<svelte:element this={type}>Click Me</svelte:element>
