<script>
  import { spring } from 'svelte/motion';
  const images = [
    'https://picsum.photos/id/1/200/200',
    'https://picsum.photos/id/2/200/200',
    'https://picsum.photos/id/3/200/200',
    'https://picsum.photos/id/4/200/200',
    'https://picsum.photos/id/5/200/200',
    'https://picsum.photos/id/6/200/200',
    'https://picsum.photos/id/7/200/200',
    'https://picsum.photos/id/8/200/200',
    'https://picsum.photos/id/9/200/200',
    'https://picsum.photos/id/10/200/200',
    'https://picsum.photos/id/11/200/200',
    'https://picsum.photos/id/12/200/200',
    'https://picsum.photos/id/13/200/200',
    'https://picsum.photos/id/14/200/200',
  ];
  const imgElements = [];
  let selectedImageIndex = -1;
  let left, top, width, height;
  const transform = spring(
    { translate: { x: 0, y: 0 }, scale: { x: 1, y: 1 } },
    { stiffness: 0.1, damping: 0.25 }
  );
  let opacity = spring(0, { stiffness: 0.1, damping: 0.25 });

  function openPreview(index) {
    if (selectedImageIndex !== -1) return;
    selectedImageIndex = index;
    const rect = imgElements[index].getBoundingClientRect();
    left = rect.left;
    top = rect.top;
    width = rect.width;
    height = rect.height;
		const targetWidth = Math.min(window.innerWidth, window.innerHeight) * 0.8;
		const targetHeight = (targetWidth / width) * height;
		const targetLeft = (window.innerWidth - targetWidth) / 2;
		const targetTop = (window.innerHeight - targetHeight) / 2;
		$transform = {
			translate: { x: targetLeft - left, y: targetTop - top },
			scale: { x: targetWidth / width, y: targetHeight / height },
		}
		$opacity = 1;
  }
  function closePreview() {
    if (selectedImageIndex === -1) return;
    Promise.all([
			transform.set({ translate: { x: 0, y: 0 }, scale: { x: 1, y: 1 } }),
      opacity.set(0),
    ]).then(() => {
      selectedImageIndex = -1;
    });
  }
</script>

<div
  class:backdrop={selectedImageIndex !== -1}
  style:opacity={$opacity}
  on:click={closePreview}
/>

<div class="image-container">
  {#each images as image, index}
    <div>
      <img
        src={image}
        on:click={() => openPreview(index)}
        class:selected={selectedImageIndex === index}
        style={selectedImageIndex === index
          ? `position: fixed; left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px; 
					transform: translate(${$transform.translate.x}px, ${$transform.translate.y}px) scale(${$transform.scale.x}, ${$transform.scale.y});`
          : ''}
        bind:this={imgElements[index]}
      />
    </div>
  {/each}
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .selected {
    z-index: 1000;
    pointer-events: none;
  }
  img {
    width: 100%;
    transform-origin: 0 0;
  }
  .image-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
