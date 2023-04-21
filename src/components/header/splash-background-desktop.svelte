<script lang="ts">
	import { lightMode } from '../../stores';

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
		box-shadow: -0.25em 0em 2px rgba(0, 0, 0, 0.2);
		animation-name: primary-splash-in;
		animation-duration: 1300ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-out;
	}

	@keyframes primary-splash-in {
		0% {
			transform: translateX(70em);
			opacity: 0;
		}
		40% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
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
		box-shadow: -0.1em 0em 2px rgba(0, 0, 0, 0.1);
		animation-name: secondary-splash-in;
		animation-duration: 1400ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-in-out;
	}

	@keyframes secondary-splash-in {
		0% {
			transform: translateX(70em);
			opacity: 0;
		}
		45% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
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
		box-shadow: -0.05em 0em 1px rgba(0, 0, 0, 0.05);
		animation-name: tertiary-splash-in;
		animation-duration: 1700ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-in-out;
	}

	@keyframes tertiary-splash-in {
		0% {
			transform: translateX(70em);
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
