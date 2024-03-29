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

<div class="header-height" />
<div class="circles-container">
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
	<div style="background-color:{tertiarySplash};" class="tertiary-circle {tertiarySplashAnimation}" />
</div>

<style>
	.header-height {
		min-height: 68em;
	}

	.light-mode-dom {
		transform: translateX(-30em) translateY(8em) scale(0.9);
		animation-name: light-mode-dom-animation;
		animation-duration: 2300ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-in-out;
	}

	.dark-mode-dom {
		transform: translateX(-20em) translateY(20em) scale(0.9);
		animation-name: dark-mode-dom-animation;
		animation-duration: 2300ms;
		animation-iteration-count: 1;
		animation-duration: forwards;
		animation-timing-function: ease-in-out;
	}

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

		overflow: hidden;
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

	@media (min-width: 480px) and (max-width: 1024px) {
		.light-mode-dom {
			transform: translateX(-20em) translateY(12em) scale(0.6);
		}

		.dark-mode-dom {
			transform: translateX(-12em) translateY(15em) scale(0.6);
		}
	}

	@keyframes light-mode-dom-animation {
		0% {
			opacity: 0;
			transform: translate(-70%);
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
		40% {
			filter: brightness(0) grayscale(80%);
			opacity: 1;
		}
		100% {
			filter: none;
		}
	}
</style>
