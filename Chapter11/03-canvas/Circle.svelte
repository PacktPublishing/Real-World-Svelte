<script>
  export let radius;
	export let color;
	export let x;
	export let y;
	
	import { getContext, onMount } from 'svelte';
	const { registerDrawFunction, redrawCanvas } = getContext('canvas');
	
	$: radius, color, x, y, redrawCanvas();
	onMount(() => {
		const unregister = registerDrawFunction(draw);
    return () => {
      unregister();
      redrawCanvas();
    }
  });
  function draw(ctx) {
    ctx.fillStyle = color;
    ctx.beginPath() 
    ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);
    ctx.fill();
  }
</script>