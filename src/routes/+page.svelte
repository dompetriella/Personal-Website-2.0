<script lang="ts">
	import HeaderSign from '../components/header-sign.svelte';
	import SplashButton from '../components/splash-button.svelte';
	import ProjectHeader from '../components/project-header.svelte';
	import { lightMode } from '../stores';
	import SplashBackgroundDesktop from '../components/splash-background-desktop.svelte';
	let screenSize: number;
	const mobile: number = 480;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="main-tree">
	<div class="header-area">
		<div class="header">
			<HeaderSign fontSize={screenSize > mobile ? 5 : 2.7} />
			<div style="color: {$lightMode ? 'var(--darkText)' : 'var(--lightText)'}" class="header-text">
				<div>I'M DOM PETRIELLA</div>
				<div>{$lightMode ? 'FULL STACK DEVELOPER' : 'VISUAL DESIGNER'}</div>
				<div>{$lightMode ? 'BY DAY' : 'BY NIGHT'}</div>
			</div>
		</div>
		{#if screenSize > mobile}
			<SplashBackgroundDesktop />
		{/if}
	</div>
	<div class="projects-area">
		{#if screenSize > mobile}
			<div class="projects-header-desktop">
				<ProjectHeader />
			</div>
		{/if}
		<div class="splash-buttons">
			<SplashButton text="CODE" />
			<SplashButton text="ART" />
			<SplashButton text="GAMES" />
		</div>
	</div>
	<div class="contact-area" />
</div>

<style>
	.main-tree {
		display: flex;
		flex-direction: column;
	}

	.header-text {
		text-align: center;
		letter-spacing: 2px;
		padding: 1em;
	}

	.header {
		z-index: 50;
	}

	.splash-buttons {
		display: flex;
	}

	.projects-area {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* mobile */
	@media (max-width: 480px) {
		.header-area {
			padding-top: 2em;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.splash-buttons {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			row-gap: 5em;
		}
	}

	/* desktop */
	@media (min-width: 480px) {
		.main-tree {
			align-items: start;
		}

		.header-area {
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

		.splash-buttons {
			width: 100vw;
			justify-content: space-around;
			align-items: center;
		}
	}
</style>
