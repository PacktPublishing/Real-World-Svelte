<script>
	import Canvas from './Canvas.svelte';
	import Rectangle from './Rectangle.svelte';
  
	let x = 10, y = 10, height = 100, width = 100;
</script>

<Canvas width={500} height={500}>
  <Rectangle
    fill="red" stroke="green"
    {x} {y} {height} {width}
  />
</Canvas>
