<script>
	export let value;
	export let onChange;
</script>

<select valueÏ={value} on:change={event => onChange(event.target.value)}>
	<option value="Apple">Apple</option>
	<option value="Ball">Ball</option>
	<option value="Cat">Cat</option>
</select>