<script>
  function longPress(node, { duration = 1000 } = {}) {
    let timer;
    function handleMousedown() {
      timer = setTimeout(() => {
        node.dispatchEvent(new CustomEvent('longpress'));
      }, duration);
    }
    function handleMouseup() {
      clearTimeout(timer);
    }
    node.addEventListener('mousedown', handleMousedown);
    node.addEventListener('mouseup', handleMouseup);
    return {
      destroy() {
        node.removeEventListener('mousedown', handleMousedown);
        node.removeEventListener('mouseup', handleMouseup);
      },
    };
  }
</script>

<button
  use:longPress
  on:longpress={() => {
    console.log('Button long pressed!');
  }}
/>
