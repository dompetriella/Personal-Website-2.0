<script lang="ts">
	import { Theme } from '../../models/theme';
	import { lightMode } from '../../stores';

	$: primarySplash = $lightMode ? Theme.lightModeSplashPrimary : Theme.darkModeSplashPrimary;
	$: secondarySplash = $lightMode
		? Theme.lightModeSplashSecondary
		: Theme.darkModeSplashSecondary;
	$: tertiarySplash = $lightMode
		? Theme.lightModeSplashTertiary
		: Theme.darkModeSplashTertiary;

	$: primarySplashAnimation = $lightMode
		? 'light-primary-splash-animation'
		: 'dark-primary-splash-animation';

	$: secondarySplashAnimation = $lightMode
		? 'light-secondary-splash-animation'
		: 'dark-secondary-splash-animation';

	$: tertiarySplashAnimation = $lightMode
		? 'light-tertiary-splash-animation'
		: 'dark-tertiary-splash-animation';

	$: domModeClass = $lightMode ? 'light-mode-dom' : 'dark-mode-dom';
</script>

<div class="circles-container">
	<div class="projects-anchor" id="projects-m" />
	<div style={"color: " + Theme.darkText} class="text">PROJECTS</div>
	<div style="background-color:{primarySplash};" class="primary-circle {primarySplashAnimation}">
		<div class={domModeClass}>
			<img
				src={$lightMode ? '/light-dom.svg' : '/dark-dom.svg'}
				alt={$lightMode ? 'picture of dom (light mode)' : 'picture of dom (dark mode)'}
			/>
		</div>
	</div>
	<div
		style="background-color:{secondarySplash};"
		class="secondary-circle {secondarySplashAnimation}"
	/>
	<div
		style="background-color:{tertiarySplash};"
		class="tertiary-circle {tertiarySplashAnimation}"
	/>
</div>

<style>
	.projects-anchor {
		margin-top: 40em;
	}

	.light-mode-dom {
		transform: translateX(-29em) translateY(-12em) scale(0.6);
		animation-name: light-mode-dom-animation;
		animation-duration: 2300ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-in-out;
	}

	.dark-mode-dom {
		transform: translateX(-22em) translateY(-5em) scale(0.6);
		animation-name: dark-mode-dom-animation;
		animation-duration: 2300ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-in-out;
	}

	.circles-container {
		position: relative;
		overflow: hidden;
		margin-top: -3em;
		margin-bottom: 5em;
		height: 54.5em;
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
		overflow: hidden;
		z-index: 3;
		margin-right: -15em;
		margin-top: 8em;
		box-shadow: 0em 0.25em 2px rgba(0, 0, 0, 0.2);
		animation-name: primary-splash-in;
		animation-duration: 1200ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-out;
	}

	@keyframes primary-splash-in {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			opacity: 0;
		}

		100% {
			transform: scale(1);
			opacity: 1;
		}
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
		box-shadow: 0em 0.2em 2px rgba(0, 0, 0, 0.1);
		animation-name: primary-splash-in;
		animation-duration: 1600ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-out;
	}

	@keyframes secondary-splash-in {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		40% {
			opacity: 0;
		}

		100% {
			transform: scale(1);
			opacity: 1;
		}
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
		box-shadow: 0em 0.1em 1px rgba(0, 0, 0, 0.02);
		animation-name: tertiary-splash-in;
		animation-duration: 2100ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-out;
	}

	@keyframes tertiary-splash-in {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		40% {
			opacity: 0;
		}

		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes light-mode-dom-animation {
		0% {
			opacity: 0;
		}
		40% {
			transform: translate(-40em, -20em) scale(0.5);
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes dark-mode-dom-animation {
		0% {
			opacity: 0;
			filter: brightness(0);
		}
		31% {
			filter: brightness(0) grayscale(100%);
		}
		40% {
			filter: brightness(0) grayscale(80%);
		}
		100% {
			filter: none;
			opacity: 1;
		}
	}
</style>
