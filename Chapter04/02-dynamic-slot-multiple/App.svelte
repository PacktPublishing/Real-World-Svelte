<script>
  import Card from './Card.svelte';
</script>

<Card>
  <svelte:fragment slot="header" let:width let:height>
    <h1>Dimension: {width} x {height}</h1>
  </svelte:fragment>

  <svelte:fragment slot="footer">Custom footer</svelte:fragment>
</Card>
