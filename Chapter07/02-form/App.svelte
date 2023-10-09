<script>
  function enhance(form) {
    function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(form);
      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });
      form.reset();
    }
    form.addEventListener('submit', handleSubmit);
    return {
      destroy() {
        form.removeEventListener('submit', handleSubmit);
      },
    };
  }
</script>

<form action="/foo" method="post" use:enhance>
  <input name="name" />
  <input name="address" />
  <button>Submit</button>
</form>
