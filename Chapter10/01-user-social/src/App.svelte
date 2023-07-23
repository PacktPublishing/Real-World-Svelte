<script>
  import { writable } from 'svelte/store';
  import WithoutDerive from './components/WithoutDerive/index.svelte';
  import WithDerive from './components/WithDerive/index.svelte';
  const userInfo = writable({
    personalDetails: { name: 'John Doe', age: 30 },
    socials: ['facebook', 'twitter', 'instagram'],
  });
</script>

<section>
  <p>The component below uses 1 Svelte store <b>without</b> derive</p>
  <WithoutDerive {userInfo} />
</section>

<section>
  <p>The component below uses 1 Svelte store <b>with</b> derive</p>
  <WithDerive {userInfo} />
</section>

<section>
  <p>
    Click here to update the age:
    <button
      on:click={() => {
        $userInfo.personalDetails = {
          ...$userInfo.personalDetails,
          age: Math.floor(Math.random() * 20) + 10,
        };
      }}>Random age</button
    >
  </p>
  <p>
    Click here to update the socials:
    <button
      on:click={() => {
        $userInfo.socials = ['facebook', 'twitter', 'instagram', 'linkedin'];
      }}>Add linkedin</button
    >
  </p>
</section>

<style>
  section {
    border: 1px solid black;
    margin: 12px;
    padding: 12px;
  }
</style>
