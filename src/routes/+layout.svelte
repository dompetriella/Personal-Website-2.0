<script>
	import './styles.css';
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import { lightMode } from '../stores';
</script>

<div class="app">
	<Navbar />

	<main
		style={$lightMode
			? 'background-color: var(--lightModePrimary);'
			: 'background-color: var(--darkModePrimary);'}
	>
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
	}
</style>
