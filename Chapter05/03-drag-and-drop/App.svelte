<script>
	let x = 10, y = 10, dragging = false;
  function dragAndDrop(node) {
    let offset;
    function mouseup() {
			node.dispatchEvent(new CustomEvent('dragEnd'));
      node.removeEventListener('mouseup', mouseup);
      node.removeEventListener('mouseout', mouseout);
      node.removeEventListener('mousemove', mousemove);
    }
		function mouseout() {
			node.dispatchEvent(new CustomEvent('dragEnd'));
      node.removeEventListener('mouseup', mouseup);
      node.removeEventListener('mouseout', mouseout);
      node.removeEventListener('mousemove', mousemove);
		}
    function mousedown(event) {
			const rect = node.getBoundingClientRect();
      offset = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      node.dispatchEvent(new CustomEvent('dragStart'));
      node.addEventListener('mouseup', mouseup);
			node.addEventListener('mouseout', mouseout);
      node.addEventListener('mousemove', mousemove);
    }
    function mousemove(event) {
			node.dispatchEvent(new CustomEvent('dragMove', {
				detail: {
					x: event.clientX - offset.x,
					y: event.clientY - offset.y,
				}
			}));
		}
    node.addEventListener('mousedown', mousedown);
    return {
      destroy() {
        node.removeEventListener('mousedown', mousedown);
        node.removeEventListener('mouseup', mouseup);
				node.removeEventListener('mouseout', mouseout);
        node.removeEventListener('mousemove', mousemove);
      },
    };
  }
</script>

<div
	style:top={y + 'px'}
	style:left={x + 'px'}
	style:background={dragging ? 'red': 'blue'}
  use:dragAndDrop
  on:dragStart={() => {
    console.log('drag start');
		dragging = true;
  }}
  on:dragMove={(event) => {
    console.log('drag move');
		x = event.detail.x;
		y = event.detail.y;
  }}
  on:dragEnd={() => {
    console.log('drag end');
		dragging = false;
  }}
>
	Drag Me
</div>

<style>
	div {
		position: absolute;
		width: 100px;
		height: 100px;
		display: grid;
		place-items: center;
	}
</style>