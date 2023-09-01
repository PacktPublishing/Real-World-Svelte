<script>
  import CodeMirror from 'codemirror';
  import 'codemirror/lib/codemirror.css';

  let value = '';
  function onChangeHandler(event) {
    value = event.detail.text;
  }

  function codemirror(element) {
    const editor = CodeMirror(element);
    function onChange(...event) {
      // trigger 'change' event on the element
      // whenever the editor changes
      element.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            text: editor.getValue(),
          },
        })
      );
    }
    editor.on('change', onChange);
    return {
      destroy() {
        editor.off('change', onChange);
      },
    };
  }
</script>

<p>Value: "{value}"</p>
<div use:codemirror on:change={onChangeHandler} />

<style>
  div {
    border: 1px solid black;
  }
</style>
