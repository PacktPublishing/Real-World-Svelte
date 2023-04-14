<script>
  export let x;
	export let y;
	export let base;
	export let height;
	export let color;
	export let stroke;
	
	import { getContext, onMount } from 'svelte';
	const { registerDrawFunction, redrawCanvas } = getContext('canvas');
	
	$: x, y, base, height, color, redrawCanvas();
	onMount(() => {
		const unregister = registerDrawFunction(draw);
    return () => {
      unregister();
      redrawCanvas();
    }
  });
  function draw(ctx) {
		ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.beginPath();
		ctx.moveTo(x - base / 2, y + height / 2); // Move pen to bottom-left corner
		ctx.lineTo(x, y - height / 2); // Line to top corner
		ctx.lineTo(x + base / 2, y + height / 2); // Line to bottom-right corner
		ctx.closePath(); // Line to bottom-left corner
		ctx.stroke();
		ctx.fill();
  }
</script>