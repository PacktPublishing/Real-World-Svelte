<script>
	import { setContext, onMount } from 'svelte';
	export let width, height;
	let canvas, ctx;
	let scheduled = false;
  
	const drawFunctions = new Set();
  function registerDrawFunction(fn) {
    drawFunctions.add(fn);
    return () => {
      drawFunctions.delete(fn);
    }
  }

  function redrawCanvas() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      draw();
      scheduled = false;
    });
  }

	setContext('canvas', {
		registerDrawFunction,
		redrawCanvas,
	});

	function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 		drawFunctions.forEach(fn => fn(ctx));
	}
	onMount(() => {
		ctx = canvas.getContext('2d');
		draw();
	});
</script>

<canvas {width} {height} bind:this={canvas} />
<slot />