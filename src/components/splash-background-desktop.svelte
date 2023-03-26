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

<div style="height: 68em;" />
<div class="circles-container">
	<div style="background-color:{primarySplash};" class="primary-circle" />
	<div style="background-color:{secondarySplash};" class="secondary-circle" />
	<div style="background-color:{tertiarySplash};" class="tertiary-circle" />
</div>

<style>
	.circles-container {
		position: absolute;
		overflow: hidden;
		height: 80em;
		width: 100vw;
	}

	.primary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 60em;
		width: 68em;
		border-radius: 50%;
		margin-top: -5em;
		transform: translateX(25em);
		z-index: 3;
	}

	.secondary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 73em;
		width: 74em;
		border-radius: 50%;
		margin-top: -16em;
		transform: translateX(22em);
		z-index: 2;
	}

	.tertiary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 85em;
		width: 85em;
		border-radius: 50%;
		margin-top: -28em;
		transform: translateX(20em);
		z-index: 1;
	}
</style>
