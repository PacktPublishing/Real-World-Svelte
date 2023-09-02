<script>
  import A from './A.svelte';
  let height = { value: 100 };
  setInterval(() => console.log('B:', height), 1000);
</script>
<A height={height} />

<button on:click={() => {
  height.value += 10;
}}>Change from B</button>
