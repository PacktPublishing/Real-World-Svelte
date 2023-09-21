<script>
  import JsonTree from './JsonTree.svelte';
</script>

<JsonTree
  data={{
    a: undefined,
    b: '2',
    c: { d: false },
    e: {
      f: {
        j: 42,
      },
    },
  }}
/>
