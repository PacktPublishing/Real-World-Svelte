<script>
  import { fade, blur } from 'svelte/transition';

  let condition = false;
</script>

<label><input bind:checked={condition} type="checkbox" /> Show Content</label>

<hr />

in: + transition:

{#if condition}
	<div in:fade={{duration:5000}}>some content</div>
	<div transition:blur={{duration:5000}}>more content</div>
{/if}

<hr />

out: + transition:

{#if condition}
	<div out:fade={{duration:5000}}>some content</div>
	<div transition:blur={{duration:5000}}>more content</div>
{/if}