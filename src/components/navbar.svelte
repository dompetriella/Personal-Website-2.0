<script>
	import '/src/app.css';
	import { lightMode, toggleLightMode } from '../stores';

	$: navbarBackground = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeSecondary)';
	$: navbarBoxShadow = $lightMode
		? '-5px 5px 0em 2px var(--darkGreenText)'
		: '-5px 5px 0em 2px var(--darkText)';

	$: textColor = $lightMode ? 'var(--darkGreenText)' : 'var(--lightText)';
</script>

<nav class="mobile" style="background-color: {navbarBackground}; box-shadow: {navbarBoxShadow};">
	<a href="#home-section">
		<img
			class="icon-image"
			src={$lightMode ? '/light-home.png' : '/dark-home.png'}
			alt="home"
			height="35"
			width="35"
		/>
	</a>

	<a href="#projects-section">
		<img
			class="icon-image"
			src={$lightMode ? '/light-projects.png' : '/dark-projects.png'}
			alt="projects"
			height="35"
			width="35"
		/>
	</a>

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

<nav class="desktop" style="background-color: {navbarBackground}; box-shadow: {navbarBoxShadow};">
	<div class="left-nav">
		<a href="#home-section">
			<div class="nav-text" style="color: {textColor}">HOME</div>
		</a>
	</div>

	<div class="right-nav">
		<a href="#projects-section-desktop">
			<div class="nav-text" style="color: {textColor}">PROJECTS</div>
		</a>

		<div class="nav-text" style="color: {textColor}">CONTACT</div>
		<img
			on:click={toggleLightMode}
			on:keypress={toggleLightMode}
			src={$lightMode ? '/sun.png' : '/moon.png'}
			alt={$lightMode ? 'sun' : 'moon'}
			height="70"
			width="70"
		/>
	</div>
</nav>

<style>
	a {
		text-decoration: none;
	}

	img {
		cursor: pointer;
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

		.right-nav {
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
			cursor: pointer;
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
			align-items: center;
		}
	}
</style>
