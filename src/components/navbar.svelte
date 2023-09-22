<script lang="ts">
	import '/src/app.css';
	import { lightMode, toggleLightMode } from '../stores';
	import { Theme } from '../models/theme';

	$: navbarBackground = $lightMode ? Theme.lightModeSecondary  : Theme.darkModeSecondary;
	$: navbarBoxShadow = $lightMode
		? `-5px 5px 0px 2px ${Theme.darkGreenText}`
		: `-5px 5px 0px 2px ${Theme.darkText}`;

	$: textColor = $lightMode ? Theme.darkGreenText : Theme.lightText;

	$: lightModeToggle = $lightMode ? 'light-toggle-animation' : 'dark-toggle-animation';

	$: iconAnimation = $lightMode ? 'light-mode-icon' : 'dark-mode-icon';

	function hoverOverText(e: any) {
		e.target.style.color = $lightMode ? Theme.lightText : Theme.darkModeHighlight;
	}

	function hoverAwayText(e: any) {
		e.target.style.color = $lightMode ? Theme.darkGreenText : Theme.lightText;
	}
</script>

<nav class="mobile" style="background-color: {navbarBackground}; box-shadow: {navbarBoxShadow};">
	<a href="#home">
		<img
			class="icon-image {iconAnimation}"
			style="animation-delay: 100ms"
			src={$lightMode ? '/light-home.png' : '/dark-home.png'}
			alt="home"
			height="35"
			width="35"
		/>
	</a>

	<a href="#projects-m">
		<img
			class="icon-image {iconAnimation}"
			style="animation-delay: 300ms"
			src={$lightMode ? '/light-projects.png' : '/dark-projects.png'}
			alt="projects"
			height="35"
			width="35"
		/>
	</a>

	<a href="#contact-m">
		<img
			class="icon-image {iconAnimation}"
			style="animation-delay: 500ms"
			src={$lightMode ? '/light-contact.png' : '/dark-contact.png'}
			alt="contact"
			height="35"
			width="35"
		/>
	</a>

	<img
		on:click={toggleLightMode}
		on:keypress={toggleLightMode}
		class={lightModeToggle}
		src={$lightMode ? '/sun.png' : '/moon.png'}
		alt={$lightMode ? 'sun' : 'moon'}
		height="70"
		width="70"
	/>
</nav>

<nav class="desktop" style="background-color: {navbarBackground}; box-shadow: {navbarBoxShadow};">
	<div class="left-nav">
		<a href="#home">
			<div
				class="nav-text"
				style="color: {textColor}"
				on:blur={hoverAwayText}
				on:focus={hoverOverText}
				on:mouseover={hoverOverText}
				on:mouseout={hoverAwayText}
			>
				HOME
			</div>
		</a>
	</div>

	<div class="right-nav">
		<a href="#projects">
			<div
				class="nav-text"
				style="color: {textColor}"
				on:blur={hoverAwayText}
				on:focus={hoverOverText}
				on:mouseover={hoverOverText}
				on:mouseout={hoverAwayText}
			>
				PROJECTS
			</div>
		</a>

		<a href="#contact">
			<div
				class="nav-text"
				style="color: {textColor}"
				on:blur={hoverAwayText}
				on:focus={hoverOverText}
				on:mouseover={hoverOverText}
				on:mouseout={hoverAwayText}
			>
				CONTACT
			</div>
		</a>

		<img
			on:click={toggleLightMode}
			on:keypress={toggleLightMode}
			class={lightModeToggle}
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

	.light-toggle-animation {
		animation-name: sun-set;
		animation-duration: 1000ms;
		animation-timing-function: ease-in-out;
	}

	@keyframes sun-set {
		0% {
			opacity: 0;
		}
		15% {
			opacity: 0;
			transform: scale(0);
		}
		25% {
			transform: translateY(1em);
		}
		50% {
			transform: scale(1.4);
			filter: brightness(300%);
		}
		100% {
		}
	}

	.dark-toggle-animation {
		animation-name: moon-rise;
		animation-duration: 1000ms;
	}

	@keyframes moon-rise {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 0;
			transform: rotate(0.5turn);
		}
	}

	@media (max-width: 480px) {
		nav.desktop {
			display: none;
		}

		nav.mobile {
			position: fixed;
			bottom: 1em;
			display: flex;
			align-items: center;
			align-self: center;
			justify-content: space-around;
			width: 85vw;
			height: 3em;
			border-radius: 1em;
			z-index: 999;
		}

		.icon-image {
			padding-top: 5px;
			padding-left: 1em;
		}

		.light-mode-icon {
			animation-name: light-mode-icon-animation;
			animation-duration: 1s;
			animation-fill-mode: backwards;
		}

		@keyframes light-mode-icon-animation {
			0% {
				opacity: 0;
			}
			25% {
				filter: brightness(500%);
			}
			50% {
				transform: translateY(-1em);
			}
			100% {
				opacity: 1;
			}
		}

		.dark-mode-icon {
			animation-name: dark-mode-icon-animation;
			animation-duration: 1s;
			animation-fill-mode: backwards;
		}

		@keyframes dark-mode-icon-animation {
			0% {
				opacity: 0;
				filter: brightness(0);
			}
			50% {
				transform: translateY(-1em);
				filter: brightness(0);
			}
			100% {
				opacity: 1;
			}
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
			justify-content: center;
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
