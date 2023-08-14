<script>
  let isValid = false;
  let errorMessage = '';
  function validateOnType(input) {
    function onInput() {
      const isValid = input.checkValidity();
      const errorMessage = isValid ? '' : getErrorMessage(input.validity);
      input.dispatchEvent(
        new CustomEvent('validate', { detail: { isValid, errorMessage } })
      );
    }
    function getErrorMessage(validity) {
      if (validity.valueMissing) {
        return 'Value required';
      } else if (validity.tooShort) {
        return 'Value too short';
      } else {
        return '';
      }
    }

    input.addEventListener('input', onInput);
    return {
      destroy() {
        input.removeEventListener('input', onInput);
      },
    };
  }
</script>

<input
  required
  minlength="5"
  class:invalid={!isValid}
  use:validateOnType
  on:validate={(event) => {
    isValid = event.detail.isValid;
    errorMessage = event.detail.errorMessage;
  }}
/>
{errorMessage}

<style>
  .invalid {
    border: red 1px solid;
    outline: red 1px solid;
  }
</style>
