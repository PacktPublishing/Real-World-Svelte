<script>
  import PersonalDetails from './PersonalDetails.svelte';
  import Socials from './Socials.svelte';
  import { compareReference } from './compareReference';
  import { derived } from 'svelte/store';
  export let userInfo;

  const personalDetails = derived(userInfo, compareReference($userInfo => $userInfo.personalDetails));
  const socials = derived(userInfo, compareReference($userInfo => $userInfo.socials));
</script>

<PersonalDetails personalDetails={personalDetails} />
<Socials socials={socials} />
