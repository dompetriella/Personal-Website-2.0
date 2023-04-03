<script lang="ts">
	import { lightMode } from '../stores';

	$: primarySplash = $lightMode ? 'var(--lightModeSplashPrimary)' : 'var(--darkModeSplashPrimary)';
	$: secondarySplash = $lightMode
		? 'var(--lightModeSplashSecondary)'
		: 'var(--darkModeSplashSecondary)';
	$: tertiarySplash = $lightMode
		? 'var(--lightModeSplashTertiary)'
		: 'var(--darkModeSplashTertiary)';
</script>

<div class="circles-container">
	<div class="projects-anchor" id="projects-m" />
	<div style="color: var(--darkText)" class="text">PROJECTS</div>
	<div style="background-color:{primarySplash};" class="primary-circle" />
	<div style="background-color:{secondarySplash};" class="secondary-circle" />
	<div style="background-color:{tertiarySplash};" class="tertiary-circle" />
</div>

<style>
	.projects-anchor {
		margin-top: 40em;
	}

	.circles-container {
		position: relative;
		overflow: hidden;
		margin-top: -3em;
		margin-bottom: 5em;
		height: 54em;
		width: 100vw;
	}

	.text {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 2em;
		letter-spacing: 2px;
		z-index: 4;
		margin-top: 23em;
		margin-right: 0.5em;
	}

	.primary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 42em;
		width: 42em;
		border-radius: 50%;
		z-index: 3;
		margin-right: -15em;
		margin-top: 8em;
	}

	.secondary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 48em;
		width: 50em;
		border-radius: 50%;
		z-index: 2;
		margin-right: -20em;
		margin-top: 4em;
	}

	.tertiary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 54em;
		width: 52em;
		border-radius: 50%;
		z-index: 1;
		margin-right: -20em;
	}
</style>
