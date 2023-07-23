<script>
  import { afterUpdate } from 'svelte';
  import UpdateCount from '../UpdateCount.svelte';
  export let socials;
  let updateCount = 0;

  afterUpdate(() => {
    updateCount++;
  });
</script>

<p>Social accounts: {$socials.join(',')}</p>
<UpdateCount updateCount={updateCount} />
