<script>
  export let date;
  export let locale;
  // Reactive declaration with multiple dependencies
  $: label = date.toLocaleDateString(locale);
</script>
<label>{label}</label>
