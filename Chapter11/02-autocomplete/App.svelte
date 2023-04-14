<script>
  import Autocomplete from './Autocomplete.svelte';
  import data from './data';
  let search = (value) => {
    return new Promise(resolve => {
      // add some artificial random delay
      setTimeout(() => {
        resolve(data.filter(item => item.toLowerCase().indexOf(value.toLowerCase()) > -1))
      }, Math.random() * 10000)
    })
  }
</script>

<Autocomplete {search} let:value let:setValue let:searching let:suggestions let:selectSuggestion>
  <input {value} on:input={event => setValue(event.currentTarget.value)}>
  {#if searching}Searching...{/if}
  {#if suggestions}
    <ul>
      {#each suggestions as suggestion}
        <li on:click={() => selectSuggestion(suggestion)}>{suggestion}</li>
      {/each}
    </ul>
  {/if}
</Autocomplete>
