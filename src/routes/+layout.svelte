<script>
	import './styles.css';
	import '../app.css'

</script>

<div class="app">
	<nav>
		<div class="navbar-items">
		</div>
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

	nav {
		position: fixed;
		bottom: 1em;
		display: flex;
		align-items: center;
		align-self: center;
		width: 85vw;
		height: 3em;
		background-color: var(--lightModeSecondary);
		border-radius: 15px;
		box-shadow: -5px 5px 0em 2px var(--darkGreenText);
		z-index: 999;
	}

	.navbar-items {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	main {
		width: 100vw;
		height: 100vh;
		background-color: var(--lightModePrimary);

	}

	@media (min-width: 480px) {
        
	}
</style>
