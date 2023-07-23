<script>
  import PersonalDetails from './PersonalDetails.svelte';
  import Socials from './Socials.svelte';
  export let userInfo;

  $: personalDetails = $userInfo.personalDetails;
  $: socials = $userInfo.socials;
</script>

<PersonalDetails personalDetails={personalDetails} />
<Socials socials={socials} />
