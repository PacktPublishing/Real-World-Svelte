<script>
	import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  
  const data = tweened(generateData(10));

  onMount(() => {
		const intervalId = setInterval(() => {
			$data = generateData(10);
		}, 1000);
		return () => clearInterval(intervalId);
	});

	function generateData(length) {
    const result = new Array(length);
    for (let i = 0; i < length; i ++) {
      result[i] = Math.random() * 300;
    }
    return result;
  }
</script>

<style>
  .bar {
    background-color: steelblue;
    height: 50px;
  }
</style>

<div>
  {#each $data as value}
    <div class="bar" style="width: {value}px"></div>
  {/each}
</div>
