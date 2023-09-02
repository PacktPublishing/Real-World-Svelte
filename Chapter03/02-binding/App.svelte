<script>
  import Profile from './Profile.svelte';
  let name = "John";
</script>

<p>Name from App: {name}</p>
<Profile bind:username={name} />

<button on:click={() => name = "Svelte"}>Update from App</button>
