<script>
  export let items;
  let currentIndex = 0;
  $: currentItem = items[currentIndex];
  const setCurrentIndex = (value) => { currentIndex = value; };
  const prev = () => setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  const next = () => setCurrentIndex((currentIndex + 1) % items.length);
</script>

<slot {currentIndex} {currentItem} {setCurrentIndex} {prev} {next} />