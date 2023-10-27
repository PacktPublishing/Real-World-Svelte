<script>
  import { fade, blur, fly, slide, scale, draw } from 'svelte/transition';
  import { quadInOut } from 'svelte/easing';

  let show = false;
</script>

<label><input bind:checked={show} type="checkbox" /> Show Content</label>

<div>
  This fades: 
  {#if show}
    <span transition:fade={{ easing: quadInOut }}>content here</span>
  {/if}
</div>
<div>
  This blurs: 
  {#if show}
    <span transition:blur={{ easing: quadInOut }}>content here</span>
  {/if}
</div>
<div>
  This fly: 
  {#if show}
    <span style="display: inline-block;" transition:fly={{ easing: quadInOut, x: 30 }}>content here</span>
  {/if}
</div>
<div>
  This slide: 
  {#if show}
    <span style="display: inline-block;" transition:slide={{ easing: quadInOut }}>content here</span>
  {/if}
</div>
<div>
  This scale: 
  {#if show}
    <span style="display: inline-block;" transition:scale={{ easing: quadInOut, start: 2 }}>content here</span>
  {/if}
</div>
<div>
	This draws:
	<svg height="50" width="50" viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
		{#if show}
			<path
				transition:draw={{ easing: quadInOut }}
				d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
				fill="none"
				stroke="cornflowerblue"
				stroke-width="0.1px"
				stroke-linejoin="round"
			/>
		{/if}
	</svg>
</div>