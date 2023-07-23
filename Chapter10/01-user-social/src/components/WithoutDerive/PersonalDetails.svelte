<script>
  import { afterUpdate } from 'svelte';
  import UpdateCount from '../UpdateCount.svelte';
  export let personalDetails;
  let updateCount = 0;

  afterUpdate(() => {
    updateCount++;
  });
</script>

<p>Name: {personalDetails.name}</p>
<p>Age: {personalDetails.age}</p>
<UpdateCount updateCount={updateCount} />

