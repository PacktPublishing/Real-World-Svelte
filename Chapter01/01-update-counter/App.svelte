<script>
  import { createUpdateCounter } from './update-counter';
  const { updateCount, startMeasuring, stopMeasuring } = createUpdateCounter();

  let variable = 0;
</script>

<button on:click={startMeasuring}>Measure</button>
<button on:click={stopMeasuring}>Stop</button>
<span>Updated {$updateCount} times</span>

<button on:click={() => variable++}>Click me to update the component</button>
