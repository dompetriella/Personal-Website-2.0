<script lang="ts">
	import HeaderSign from './header-sign.svelte';
	import { lightMode } from '../../stores';
	import SplashBackgroundDesktop from './splash-background-desktop.svelte';
	import SplashBackgroundProjectsMobile from '../projects/splash-background-projects-mobile.svelte';

	let screenSize: number;
	const mobile: number = 480;

	$: fontSize = screenSize > mobile ? 5 : 2.7;
	$: textColor = $lightMode ? 'var(--darkText)' : 'var(--lightText)';
	$: animationType = $lightMode ? 'light-text-animation' : 'dark-text-animation';
</script>

<svelte:window bind:innerWidth={screenSize} />

<section id="home" class="header-section">
	<div class="header">
		<div>
			<HeaderSign {fontSize} animationDelay={100} />
		</div>

		<div style="color: {textColor}" class="header-text">
			<div class={animationType} style:animation-delay={$lightMode ? '700ms' : '600ms'}>
				I'M DOM PETRIELLA
			</div>
			<div class={animationType} style:animation-delay={$lightMode ? '900ms' : '1000ms'}>
				{$lightMode ? 'FULL STACK DEVELOPER' : 'VISUAL DESIGNER'}
			</div>
			<div class={animationType} style:animation-delay={$lightMode ? '1100ms' : '1600ms'}>
				{$lightMode ? 'BY DAY' : 'BY NIGHT'}
			</div>
		</div>
	</div>
	{#if screenSize > mobile}
		<SplashBackgroundDesktop />
	{/if}
	{#if screenSize < mobile}
		<SplashBackgroundProjectsMobile />
	{/if}
</section>

<style>
	.light-header-sign {
		animation-name: fade-in-text;
		animation-duration: 600ms;
		animation-fill-mode: backwards;
	}

	.header-text {
		padding-top: 1em;
		text-align: center;
		letter-spacing: 2px;
	}

	.light-text-animation {
		animation-name: fade-in-text;
		animation-duration: 600ms;
		animation-fill-mode: backwards;
	}

	@keyframes fade-in-text {
		0% {
			transform: translateY(-2em);
			opacity: 0;
		}
		100% {
			opacity: 100;
		}
	}

	.dark-text-animation {
		animation-name: glow-in-text;
		animation-duration: 4000ms;
		animation-fill-mode: backwards;
	}

	@keyframes glow-in-text {
		0% {
			background: linear-gradient(
				to left,
				transparent 10%,
				var(--darkModeHighlight) 30%,
				var(--lightText) 60%
			);
			background-size: 1000%;
			background-position-x: right;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		100% {
			background: linear-gradient(
				to left,
				transparent 10%,
				var(--darkModeHighlight) 30%,
				var(--lightText) 60%
			);
			background-size: 1000%;
			background-position-x: left;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}

	.header {
		z-index: 50;
	}

	.splash-buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: start;
		flex-wrap: wrap;
	}

	.projects-section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* mobile */
	@media (max-width: 480px) {
		.header-section {
			padding-top: 2em;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.splash-buttons {
			row-gap: 5em;
			margin-bottom: 10em;
		}
	}

	/* desktop */
	@media (min-width: 480px) {
		.main-tree {
			align-items: start;
			margin: 0;
			padding: 0;
		}

		.header-section {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.header {
			padding-left: 10em;
			padding-top: 15em;
		}

		.header-text {
			font-size: 1.5em;
		}

		.projects-section {
			padding: 5em 0em;
		}
	}

	/* tablet */
	@media (min-width: 481px) and (max-width: 1000px) {
		.header-text {
			color: var(--darkText) !important;
		}
	}
</style>
