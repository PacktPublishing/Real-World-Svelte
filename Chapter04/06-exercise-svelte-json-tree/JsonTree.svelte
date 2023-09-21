<script>
  import StringValue from './StringValue.svelte';
  import NumberValue from './NumberValue.svelte';
  import JsonValue from './JsonValue.svelte';

  export let data;
  function getComponent(type) {
    if (type === 'string') return StringValue;
    if (type === 'number') return NumberValue;
    return JsonValue;
  }
</script>

<ul>
  {#each Object.entries(data) as [key, value]}
    <li>
      <slot name="obj-key" {key}>
        {key}:
      </slot>
      {#if typeof value === 'object'}
        <svelte:self data={value} />
      {:else}
        <slot name="obj-value" {value}>
          <svelte:component this={getComponent(typeof value)} {value} />
        </slot>
      {/if}
    </li>
  {/each}
</ul>
