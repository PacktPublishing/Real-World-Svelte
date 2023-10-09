<script>
	import IframePopup from './IframePopup.svelte';
  function preview(element) {
    // make the <a> element position relative
    element.style.position = 'relative';
    let iframe;
    function onMouseOver() {
      iframe = new IframePopup({
        // target specifies where we want the component
        // to be inserted into
        target: element,
        // we are passing the href value into the
        // component through props
        props: { src: element.getAttribute('href') },
        intro: true,
      });
    }
    function onMouseOut() {
      iframe.$destroy();
    }

    element.addEventListener('mouseover', onMouseOver);
    element.addEventListener('mouseout', onMouseOut);
    return {
      destroy() {
        element.removeEventListener('mouseover', onMouseOver);
        element.removeEventListener('mouseout', onMouseOut);
      },
    };
  }
</script>

<a href="https://en.wikipedia.org/wiki/Svelte" use:preview>Hello</a>
