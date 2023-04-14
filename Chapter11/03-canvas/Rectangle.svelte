<script>
  export let height;
	export let width;
	export let x;
	export let y;
	export let fill;
	export let stroke;
	
	import { getContext, onMount } from 'svelte';
	const { registerDrawFunction, redrawCanvas } = getContext('canvas');
	
	$: height, width, x, y, fill, stroke, redrawCanvas();
	onMount(() => {
		const unregister = registerDrawFunction(draw);
    return () => {
      unregister();
      redrawCanvas();
    }
  });
  function draw(ctx) {
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.beginPath() 
    ctx.rect(x, y, height, width);
    ctx.stroke();
    ctx.fill();
  }
</script>