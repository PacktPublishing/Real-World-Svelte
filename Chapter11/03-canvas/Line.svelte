<script>
  export let x1;
	export let y1;
	export let x2;
	export let y2;
	export let color;
	
	import { getContext, onMount } from 'svelte';
	const { registerDrawFunction, redrawCanvas } = getContext('canvas');
	
	$: x1, y1, x2, y2, color, redrawCanvas();
	onMount(() => {
		const unregister = registerDrawFunction(draw);
    return () => {
      unregister();
      redrawCanvas();
    }
  });
  function draw(ctx) {
    ctx.strokeStyle = color;
    ctx.beginPath() 
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
  }
</script>