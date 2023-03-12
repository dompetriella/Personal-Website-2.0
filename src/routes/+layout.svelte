<script>
	import './styles.css';
	import '../app.css';
	import { get } from 'svelte/store';
	import { lightMode, toggleLightMode } from './stores';
	import { fade } from 'svelte/transition';

	let lightVisible = true;
	let darkVisible = false;
</script>

<div class="app">
	<nav
		style={$lightMode
			? 'background-color: var(--lightModeSecondary); box-shadow: -5px 5px 0em 2px var(--darkGreenText);'
			: 'background-color: var(--darkModeSecondary); box-shadow: -5px 5px 0em 2px var(--darkText);'}
	>
		<img
			class="icon-image"
			src={$lightMode ? 'src\\assets\\light-home.png' : 'src\\assets\\dark-home.png'}
			alt="home"
			height="35"
			width="35"
		/>

		<img
			class="icon-image"
			src={$lightMode ? 'src\\assets\\light-projects.png' : 'src\\assets\\dark-projects.png'}
			alt="projects"
			height="35"
			width="35"
		/>

		<img
			class="icon-image"
			src={$lightMode ? 'src\\assets\\light-contact.png' : 'src\\assets\\dark-contact.png'}
			alt="contact"
			height="35"
			width="35"
		/>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img
			on:click={toggleLightMode}
			src={$lightMode ? 'src\\assets\\sun.png' : 'src\\assets\\moon.png'}
			alt={$lightMode ? 'sun' : 'moon'}
			height="70"
			width="70"
		/>
	</nav>

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

	nav {
		position: fixed;
		bottom: 1em;
		display: flex;
		align-items: center;
		align-self: center;
		justify-content: space-around;
		width: 85vw;
		height: 3em;
		border-radius: 15px;
		z-index: 999;
	}

	.icon-image {
		padding-left: 1em;
		animation: fadeIn 1s;
	}

	main {
		width: 100vw;
		height: 100vh;
	}

	@media (min-width: 480px) {
	}
</style>
