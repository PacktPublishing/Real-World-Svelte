<script>
  import { scale } from 'svelte/transition'
  export let updateCount;
</script>

<p>Update count: 
  <span style="position:relative;padding-left:1ch">
    {#key updateCount}
      <span style="position:absolute" transition:scale>{updateCount}</span>
    {/key}
  </span>
</p>
