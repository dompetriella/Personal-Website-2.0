<script>
	import './styles.css';
	import '../app.css'
</script>

<div class="app">
	<nav>
	</nav>
	
	<main>
		<slot />
	</main>
</div>

<style>

	.app {
		display: flex;
		flex-direction: column;
		margin: 0px;
		padding: 0px;
	}

	main {
		width: 100vw;
		height: 100vh;
		background-color: var(--lightModePrimary);
	}

	@media (min-width: 480px) {
        
	}
</style>
