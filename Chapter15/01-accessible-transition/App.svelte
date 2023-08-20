<script>
  import { fade, fly } from 'svelte/transition';
  function accessibleFly(node, params) {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const matches = mediaQuery.matches;
    if (matches) {
      // user prefers reduced motion
      return fade(node, params);
    } else {      
      return fly(node, params);
    }
  }
  let list = [];
</script>

<button on:click={() => { list = [...list, 'item']; }}>Add item</button>
<button on:click={() => { list = [...list.slice(0, -1)]; }}>Remove item</button>

<ul>
  {#each list as item}
    <li transition:accessibleFly={{ x: 40 }}>{item}</li>
  {/each}
</ul>
