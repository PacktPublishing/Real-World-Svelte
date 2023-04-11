<script>
  import Carousel from './Carousel.svelte';
  let items = [];
</script>

<Carousel {items} let:currentItem let:next let:prev>
  <button on:click={prev}>{'<'}</button>
  <img src={currentItem} />
  <button on:click={next}>{'>'}</button>
</Carousel>

<Carousel {items} let:currentItem let:setCurrentIndex>
  <img src={currentItem} />
  {#each items as _, index}
    <button on:click={() => setCurrentIndex(index)}>
      {index}
    </button>
  {/each}
</Carousel>
