<script lang="ts">
	import { lightMode } from '../stores';
	export let text = 'TEXT';

	$: textColor = $lightMode ? 'var(--lightText)' : 'var(--darkText)';
	$: primarySplash = $lightMode ? 'var(--lightModeSplashPrimary)' : 'var(--darkModeSplashPrimary)';
	$: secondarySplash = $lightMode
		? 'var(--lightModeSplashSecondary)'
		: 'var(--darkModeSplashSecondary)';
	$: tertiarySplash = $lightMode
		? 'var(--lightModeSplashTertiary)'
		: 'var(--darkModeSplashTertiary)';
</script>

<div class="splash-body">
	<div class="primary-splash" style="background-color: {primarySplash}">
		<div class="text" style="color: {textColor}">{text}</div>
	</div>
	<div class="secondary-splash" style="background-color: {secondarySplash}" />
	<div class="tertiary-splash" style="background-color: {tertiarySplash}" />
</div>

<style>
	.splash-body {
		height: 11em;
		width: 11em;
		position: relative;
	}

	.primary-splash {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 7.5em;
		width: 7.5em;
		left: 1.7em;
		top: 2.7em;
		border-radius: 50%;
		background-color: white;
		z-index: 3;
		box-shadow: 0px 3px 0px 1px rgba(0, 0, 0, 0.25);
	}

	.text {
		position: absolute;
		font-size: 1.6em;
		letter-spacing: 2px;
		user-select: none;
	}

	.secondary-splash {
		position: absolute; /* Add position absolute */
		height: 9em;
		width: 9em;
		left: 1em;
		top: 1.5em;
		border-radius: 50%;
		background-color: grey;
		z-index: 2;
	}

	.tertiary-splash {
		position: absolute; /* Add position absolute */
		height: 11em;
		width: 11em;
		border-radius: 50%;
		background-color: black;
		z-index: 1;
	}

	/* mobile */
	@media (max-width: 480px) {
	}

	/* desktop */
	@media (min-width: 480px) {
		.splash-body {
			margin: 7em 0em;
		}
	}
</style>
