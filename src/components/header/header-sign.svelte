<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { lightMode } from '../../stores';
	import { funnelOut } from '../../animations/splash-buttons';

	export let text: string = 'WELCOME';
	export let fontSize: number = 2.7;
	export let width: number = 6;
	export let verticalPadding: number = 0.2;
	export let horizontalPadding: number = 0;
	export let animationDelay: number = 0;

	$: bgColor = $lightMode ? 'var(--lightModeSplashPrimary)' : 'rgb(0,0,0,.25)';
	$: color = $lightMode ? 'var(--darkModeSecondary)' : 'var(--darkModeHighlight)';
	$: textShadow = $lightMode
		? 'var(--lightModePrimary) 1px 0 5px'
		: 'var(--darkModeHighlight) 0px 0px 20px';
	$: textStroke = $lightMode ? '0px' : '2px var(--darkModeSplashTertiary)';
	$: boxShadow = $lightMode
		? '-3px 3px 0px 1px var(--darkBlueText)'
		: '0px 0px 0px 5px var(--darkModeHighlight), 0px 0px 30px 10px var(--darkModeHighlight), -5px 5px 0px 4px var(--darkModeHighlightSecondary)';
	$: border = $lightMode ? 'border: var(--lightText) solid 3px;' : 'border: none';

	$: signAnimation = $lightMode ? 'light-mode-animation' : 'dark-mode-animation';
</script>

<div
	out:funnelOut={{ duration: 400, delay: 0, y: 4 }}
	style="
	font-size: {fontSize}em; 
	width: {width}em;  
	background-color: {bgColor}; 
	color: {color}; 
	text-shadow: {textShadow}; 
	-webkit-text-stroke: {textStroke}; 
	box-shadow: {boxShadow}; 
	padding: {verticalPadding}em {horizontalPadding}em; {border};
	animation-delay: {$lightMode ? animationDelay : animationDelay + 400}ms;
	"
	class={signAnimation}
>
	{text}
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 7px;
		border: var(--lightText) solid 3px;
		letter-spacing: 0.03em;
		user-select: none;
	}

	.light-mode-animation {
		animation-name: falling-sign;
		animation-duration: 1000ms;
		animation-fill-mode: backwards;
	}

	@keyframes falling-sign {
		0% {
			opacity: 0;
			transform: translateY(-1.5em);
		}

		30% {
			opacity: 0;
		}
	}

	.dark-mode-animation {
		animation-name: neon-flicker;
		animation-duration: 1000ms;
		animation-fill-mode: backwards;
	}

	@keyframes neon-flicker {
		0% {
			opacity: 0;
		}
		18% {
			opacity: 0;
		}
		20% {
			box-shadow: none;
			text-shadow: none;
			border: none;
			opacity: 100%;
			filter: brightness(180%);
		}
		22% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		60% {
			opacity: 100%;
			filter: brightness(115%);
		}
		70% {
			opacity: 0;
		}
	}
</style>
