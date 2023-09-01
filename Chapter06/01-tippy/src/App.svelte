<script>
  import tippyJs from 'tippy.js';
  import 'tippy.js/dist/tippy.css';

  let tooltipContent = 'Hello world';

  function tippy(element, content) {
    // TODO #1: initialize the library
    const tooltipInstance = tippyJs(element, { content });

    return {
      update(newContent) {
        // TODO #2: do something when action data changes
        tooltipInstance.setContent(newContent);
      },

      destroy() {
        // TODO #3: clean up
        tooltipInstance.destroy();
      },
    };
  }
</script>

<label>
  Tooltip Content:
  <input bind:value={tooltipContent} />
</label>

<button use:tippy={tooltipContent}>Hover me</button>
