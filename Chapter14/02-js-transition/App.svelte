<script>
  import { linear } from 'svelte/easing';
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  function randomCharacter() {
    return chars[Math.floor(Math.random() * chars.length)];
  }
  function flipboard(node, params) {
    const text = node.textContent;
    const config = {
      duration: params?.duration ?? 1000,
      delay: params?.delay ?? 0,
      easing: params?.easing ?? linear,
      tick: (progress) => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
          const position = i / text.length;
          if (position < progress) {
            // display the original character
            newText += text[i];
          } else if (position < progress * 1.5) {
            // display random characters
            newText += randomCharacter();
          } else if (position < progress * 2) {
            // display dash
            newText += '-';
          } else {
            // display a blank space instead
            newText += ' ';
          }
        }
        node.textContent = newText;
      },
    };
    return config;
  }

  let show = false;
</script>

<label><input bind:checked={show} type="checkbox" /> Show text</label>

{#if show}
  <p transition:flipboard={{duration: 500}}>Hello Svelte</p>
  <span transition:flipboard={{ delay: 300 }}>This is custom colour swipe transition</span>
{/if}

<style>
  * {
    font-family: monospace;
  }
  span {
    color: #ff3e00;
  }
	p {
		color: #1f5389;
  }
</style>
