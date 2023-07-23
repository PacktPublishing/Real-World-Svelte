<script>
  import { spring } from 'svelte/motion';
  import { line } from 'd3-shape';

	const size = 16;
  const data = spring(generateData(size), { stiffness: 0.1, damping: 0.25 });

  const pathGenerator = line()
    .x((d, i) => 20 + i * 30)
    .y((d) => 400 - d);

  $: path = pathGenerator($data);
  
	setInterval(() => {
		$data = generateData(size);
	}, 1000)

  function generateData(length) {
    const result = new Array(length);
    for (let i = 0; i < length; i ++) {
      result[i] = Math.random() * 300;
    }
    return result;
  }
</script>

<style>
  .line {
    fill: none;
    stroke: steelblue;
    stroke-width: 2;
  }
</style>

<svg width={500} height={500}>
  <path class="line" d={path}></path>
  {#each $data as value, index}
    <circle cx={20 + index * 30} cy={400 - value} r={5}></circle>
  {/each}
	<!-- x-axis -->
  <line x1={20} y1={400} x2={480} y2={400} stroke="black"></line>
  <!-- y-axis -->
  <line x1={20} y1={400} x2={20} y2={100} stroke="black"></line>
</svg>
