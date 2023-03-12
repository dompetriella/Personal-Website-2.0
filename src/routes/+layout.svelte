<script>
	import './styles.css';
	import '../app.css';
	import { lightMode, toggleLightMode } from '../stores';
</script>

<div class="app">
	<nav
		class="mobile"
		style={$lightMode
			? 'background-color: var(--lightModeSecondary); box-shadow: -5px 5px 0em 2px var(--darkGreenText);'
			: 'background-color: var(--darkModeSecondary); box-shadow: -5px 5px 0em 2px var(--darkText);'}
	>
		<img
			class="icon-image"
			src={$lightMode ? '/light-home.png' : '/dark-home.png'}
			alt="home"
			height="35"
			width="35"
		/>

		<img
			class="icon-image"
			src={$lightMode ? '/light-projects.png' : '/dark-projects.png'}
			alt="projects"
			height="35"
			width="35"
		/>

		<img
			class="icon-image"
			src={$lightMode ? '/light-contact.png' : '/dark-contact.png'}
			alt="contact"
			height="35"
			width="35"
		/>

		<img
			on:click={toggleLightMode}
			on:keypress={toggleLightMode}
			src={$lightMode ? '/sun.png' : '/moon.png'}
			alt={$lightMode ? 'sun' : 'moon'}
			height="70"
			width="70"
		/>
	</nav>

	<img
		class="background-toggle"
		on:click={toggleLightMode}
		on:keypress={toggleLightMode}
		src={$lightMode ? '/sun.png' : '/fullmoon.png'}
		alt={$lightMode ? 'sun' : 'moon'}
		height="350"
		width="350"
	/>
	<nav
		class="desktop"
		style={$lightMode
			? 'background-color: var(--lightModeSecondary); box-shadow: -5px 5px 0em 2px var(--darkGreenText);'
			: 'background-color: var(--darkModeSecondary); box-shadow: -5px 5px 0em 2px var(--darkText);'}
	>
		<div class="left-nav">
			<div
				class="nav-text"
				style="color: {$lightMode ? 'var(--darkGreenText)' : 'var(--lightText)'}"
			>
				HOME
			</div>
		</div>

		<div class="right-nav">
			<div
				class="nav-text"
				style="color: {$lightMode ? 'var(--darkGreenText)' : 'var(--lightText)'}"
			>
				PROJECTS
			</div>
			<div
				class="nav-text"
				style="color: {$lightMode ? 'var(--darkGreenText)' : 'var(--lightText)'}"
			>
				CONTACT
			</div>
		</div>
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

	main {
		width: 100vw;
		height: 100vh;
	}

	@media (max-width: 480px) {
		nav.mobile {
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

		.background-toggle {
			display: none;
		}

		.nav-text {
			display: none;
		}
	}

	@media (min-width: 480px) {
		nav.mobile {
			display: none;
		}

		nav.desktop {
			position: fixed;
			top: 1em;
			display: flex;
			align-items: center;
			align-self: center;
			justify-content: space-between;
			width: 90vw;
			height: 3em;
			border-radius: 15px;
			z-index: 999;
		}

		.nav-text {
			font-size: 1.2em;
			font-weight: 100;
			letter-spacing: 1px;
			padding: 0em 1em;
		}

		.left-nav {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
		}

		.right-nav {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
		}

		.background-toggle {
			display: block;
			position: fixed;
			top: -9em;
			left: -8em;
		}
	}
</style>
