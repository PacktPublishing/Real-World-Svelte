<script>
  import { linear } from 'svelte/easing';
  function colourSwipe(node, params) {
    const { color } = window.getComputedStyle(node);
    const config = {
      duration: params?.duration ?? 1000,
      delay: params?.delay ?? 0,
      easing: params?.easing ?? linear,
      css: (progress) => {
        if (progress <= 0.5) {
          const percentage = progress * 200;
          return `background: linear-gradient(to right, ${color} 0, ${percentage}%, transparent ${percentage}%); color: transparent;`;
        } else {
          const percentage = (progress - 0.5) * 200;
          return `background: linear-gradient(to right, transparent 0, ${percentage}%, ${color} ${percentage}%);`;
        }
      },
    };
    return config;
  }

  let show = false;
</script>

<label><input bind:checked={show} type="checkbox" /> Show text</label>

{#if show}
  <p transition:colourSwipe={{duration: 500}}>Hello Svelte</p>
  <span transition:colourSwipe={{ delay: 300 }}>This is custom colour swipe transition</span>
{/if}

<style>
  span {
    color: #ff3e00;
  }
	p {
		color: #1f5389;
  }
</style>