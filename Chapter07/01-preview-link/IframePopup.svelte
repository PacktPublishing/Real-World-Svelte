<script>
  import { fade } from 'svelte/transition';

  export let src;
</script>

<iframe {src} transition:fade />

<style>
  iframe {
    position: absolute;
    left: 0;
    top: 100%;
  }
</style>
