<script lang="ts">
	import HeaderSign from '../components/header-sign.svelte';
	import { lightMode } from '../stores';
	let screenSize: number;
	const mobile: number = 480;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="main-tree">
	<div class="opening-screen">
		<div class="header-area">
			<HeaderSign fontSize={screenSize > mobile ? 5 : 2.7} />
			<div style="color: {$lightMode ? 'var(--darkText)' : 'var(--lightText)'}" class="header-text">
				<div>I'M DOM PETRIELLA</div>
				<div>{$lightMode ? 'FULL STACK DEVELOPER' : 'VISUAL DESIGNER'}</div>
				<div>{$lightMode ? 'BY DAY' : 'BY NIGHT'}</div>
			</div>
		</div>
	</div>
</div>

<style>
	.main-tree {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
	}

	.header-text {
		text-align: center;
		letter-spacing: 2px;
		padding: 1em;
	}

	.opening-screen {
		display: flex;
	}

	/* mobile */
	@media (max-width: 480px) {
		.header-area {
			padding-top: 2em;
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
	}
</style>
