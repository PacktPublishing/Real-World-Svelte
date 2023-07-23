<script>
  import Popup from './Popup.svelte';  

  let showPopup1 = false;
  let showPopup2 = false;
  let showPopup3 = false;
</script>

<label><input type="checkbox" bind:checked={showPopup1}>Show Popup 1</label>
<label><input type="checkbox" bind:checked={showPopup2}>Show Popup 2</label>
<label><input type="checkbox" bind:checked={showPopup3}>Show Popup 3</label>

<!-- Try scroll the page when one of the popups is shown on the screen -->

{#if showPopup1}
  <Popup>popup 1</Popup>
{/if}
{#if showPopup2}
  <Popup>popup 1</Popup>
{/if}
{#if showPopup3}
  <Popup>popup 1</Popup>
{/if}

<style>
  /* try to make the body 3 times taller than the window, so that it is scrollable */
  :global(body) {
    height: 300vh;
  }
</style>