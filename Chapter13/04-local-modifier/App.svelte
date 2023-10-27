<script>
  import { fade } from 'svelte/transition';

  let condition1 = false;
  let condition2 = false;
</script>

<label><input bind:checked={condition1} type="checkbox" /> Condition 1</label>
<label><input bind:checked={condition2} type="checkbox" /> Condition 2</label>

{#if condition1}
  <div transition:fade|local={{duration:1000}}>first div</div>
  {#if condition2}
		<div transition:fade|local={{duration:1000}}>second div</div>
    <div transition:fade={{duration:1000}}>third div</div>
  {/if}
{/if}
