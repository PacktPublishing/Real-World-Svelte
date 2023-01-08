<script>
  import createTweenedStore from './tweened-store';
  const store = createTweenedStore(0);
</script>

<div>Value: {$store}</div>

<button on:click={() => ($store -= 10)}>-10</button>
<button on:click={() => ($store -= 5)}>-5</button>
<button on:click={() => ($store += 5)}>+5</button>
<button on:click={() => ($store += 10)}>+10</button>
