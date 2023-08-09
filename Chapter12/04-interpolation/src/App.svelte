<script>
  import { tweened } from 'svelte/motion';
  import { interpolateRgb } from 'd3-interpolate';

  function interpolate(a, b) {
    const interpolateColor = interpolateRgb(a, b);

    return (t) => {
      return interpolateColor(t);
    };
  }

  const color = tweened('#ff0000', { interpolate: interpolate }); 
</script>

<div style:background={$color}>{$color}</div>

<p>Try change the color with the color picker below, and see the box above transition to the new color.</p>

<input
  type="color"
  value="#ff0000"
  on:input={(event) => $color = event.currentTarget.value}
/>

<style>
  div {
    color: white;
    height: 200px;
    width: 200px;
    display: grid;
    place-items: center;
  }
</style>