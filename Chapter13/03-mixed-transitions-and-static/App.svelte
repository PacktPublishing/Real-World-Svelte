<script>
  import { fade, slide } from 'svelte/transition';

  let condition = false;
</script>

<label><input bind:checked={condition} type="checkbox" /> Show Content</label>

{#if condition}
	<div in:fade={{duration:5000}}>Element with fade transition</div>
  <div>Static element without transition</div>
	<div transition:slide={{duration:5000}}>Element with slide transition</div>
{/if}
