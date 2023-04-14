<script>
  export let radius1;
	export let radius2;
	export let color;
	export let x;
	export let y;
	export let rotation = 0;
	
	import { getContext, onMount } from 'svelte';
	const { registerDrawFunction, redrawCanvas } = getContext('canvas');
	
	$: radius1, radius2, rotation, color, x, y, redrawCanvas();
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
    ctx.ellipse(x, y, radius1, radius2, rotation * Math.PI / 180, 0, 2 * Math.PI);
    ctx.fill();
  }
</script>