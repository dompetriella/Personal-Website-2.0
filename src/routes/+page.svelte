<script lang="ts">
	import HeaderSign from '../components/header-sign.svelte';
	import SplashButton from '../components/splash-button.svelte';
	import ProjectHeader from '../components/project-header.svelte';
	import { lightMode } from '../stores';
	let screenSize: number;
	const mobile: number = 480;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="main-tree">
	<div class="header-area">
		<HeaderSign fontSize={screenSize > mobile ? 5 : 2.7} />
		<div style="color: {$lightMode ? 'var(--darkText)' : 'var(--lightText)'}" class="header-text">
			<div>I'M DOM PETRIELLA</div>
			<div>{$lightMode ? 'FULL STACK DEVELOPER' : 'VISUAL DESIGNER'}</div>
			<div>{$lightMode ? 'BY DAY' : 'BY NIGHT'}</div>
		</div>
		<div style="height: 30em;" />
	</div>
	<div class="projects-area">
		<div class="projects-header-desktop">
			<ProjectHeader />
		</div>
		<div class="splash-buttons">
			<SplashButton text="CODE" />
			<SplashButton text="ART" />
			<SplashButton text="GAMES" />
		</div>
	</div>
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
