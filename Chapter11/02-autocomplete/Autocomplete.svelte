<script>
  export let search;

  let value = '';
  let searching = false;
  let suggestions = undefined;
  let currentSearch = undefined;
  
  const setValue = async _value => {
    value = _value;
    searching = true;
    let _currentSearch = {};
    currentSearch = _currentSearch;
    const results = await search(_value)
    // the search function will be called on every input change
    // if the current result return from the previous search call
    // we are going to ignore and discard the result
    if (currentSearch === _currentSearch) {
      suggestions = results;
      searching = false;
    }
  };

  const selectSuggestion = suggestion => {
    value = suggestion;
    suggestions = undefined;
    searching = false;
  }
</script>

<slot {value} {setValue} {searching} {suggestions} {selectSuggestion}></slot>