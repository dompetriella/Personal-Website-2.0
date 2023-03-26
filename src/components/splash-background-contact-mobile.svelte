<script lang="ts">
	import { lightMode } from '../stores';

	$: textColor = $lightMode ? 'var(--darkText)' : 'var(--lightText)';
	$: primarySplash = $lightMode ? 'var(--lightModeSplashPrimary)' : 'var(--darkModeSplashPrimary)';
	$: secondarySplash = $lightMode
		? 'var(--lightModeSplashSecondary)'
		: 'var(--darkModeSplashSecondary)';
	$: tertiarySplash = $lightMode
		? 'var(--lightModeSplashTertiary)'
		: 'var(--darkModeSplashTertiary)';
</script>

<div class="circles-container">
	<div style="color: {textColor}" class="text">CONTACT</div>
	<div style="background-color:{primarySplash};" class="primary-circle" />
	<div style="background-color:{secondarySplash};" class="secondary-circle" />
	<div style="background-color:{tertiarySplash};" class="tertiary-circle" />
</div>

<style>
	.circles-container {
		position: relative;
		overflow: hidden;
		height: 64em;
		width: 100vw;
	}

	.text {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 2em;
		letter-spacing: 2px;
		z-index: 4;
		margin-left: 0.5em;
	}

	.primary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 48em;
		width: 46em;
		border-radius: 50%;
		z-index: 3;
		margin-right: -15em;
		margin-top: 4em;
	}

	.secondary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 55em;
		width: 56em;
		border-radius: 50%;
		z-index: 2;
		margin-right: -18em;
		margin-top: 2em;
	}

	.tertiary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 64em;
		width: 62em;
		border-radius: 50%;
		z-index: 1;
		margin-right: -15em;
	}
</style>
