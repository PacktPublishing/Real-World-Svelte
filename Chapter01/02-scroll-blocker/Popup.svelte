<script>
  import { setupScrollBlocker } from './scroll-blocker';

  setupScrollBlocker();
</script>

<div>This is a popup: <slot /></div>

<style>
  div {
    border: 1px solid black;
    padding: 16px;
  }
</style>