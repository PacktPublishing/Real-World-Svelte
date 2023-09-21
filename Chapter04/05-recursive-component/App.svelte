<script>
  export let folder = [
    { type: 'file', name: 'a.js' },
    { type: 'file', name: 'b.js' },
    { type: 'folder', name: 'c', children: [{ type: 'file', name: 'd.js' }] },
  ];
</script>

<ul>
  {#each folder as item}
    <li>
      {#if item.type === 'file'}
        <div>File: {item.name}</div>
      {:else}
        <div>Folder: {item.name}</div>

        <svelte:self folder={item.children} />
      {/if}
    </li>
  {/each}
</ul>
