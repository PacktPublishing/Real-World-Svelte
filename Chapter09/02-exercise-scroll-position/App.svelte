<script>
  import createStore from './scroll-store';
  const scrollPosition = createStore();
</script>

<div>Scroll position {$scrollPosition}</div>

<style>
	div {
		position:fixed;
	}
</style>