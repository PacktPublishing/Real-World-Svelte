<script>
  export let username;
</script>

<p>Name in Profile: {username}</p>
<button on:click={() => (username = 'World')}>Update from Profile</button>
