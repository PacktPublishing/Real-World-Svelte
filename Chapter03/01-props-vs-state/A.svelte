<script>
  export let height;
  setInterval(() => console.log('A:', height), 1000);
</script>

<button on:click={() => {
  height.value += 10;
}}>Change from A</button>
