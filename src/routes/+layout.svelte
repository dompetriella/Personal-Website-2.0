<script>
	// import './styles.css';
</script>

<div class="app">
	<nav>
	</nav>

	<main>
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	@media (min-width: 480px) {
        
	}
</style>
