<script>
  import Input from './Input.svelte';
  import Checkbox from './Checkbox.svelte';
  import Select from './Select.svelte';

  let type = 'input';
	let value = 'hello';
	let onChange = (_value) => value = _value;

	$: DynamicComponent = getComponent(type); 

	function getComponent(type) {
	  if (type === "input") { 
	    return Input; 
	  } else if (type === "checkbox") { 
	    return Checkbox; 
	  } else { 
	    return Select;
	  } 
	}
</script>

<select bind:value={type}>
	<option value="input">input</option>
	<option value="checkbox">checkbox</option>
	<option value="select">select</option>
</select>

<div>value: {value}</div>

<hr />

<svelte:component this={DynamicComponent} {value} {onChange} />
