<script lang="ts">
	import { crossfade, fade, fly, scale } from 'svelte/transition';
	import { lightMode } from '../stores';

	export let text: string = 'WELCOME';
	export let fontSize: number = 2.7;
	export let width: number = 6;
	export let verticalPadding: number = 0.2;
	export let horizontalPadding: number = 0;
	export let animationDelay: number = 2000;

	$: bgColor = $lightMode ? 'var(--lightModeSplashPrimary)' : 'var(--darkModePrimary)';
	$: color = $lightMode ? 'var(--darkModeSecondary)' : 'var(--darkModeHighlight)';
	$: textShadow = $lightMode
		? 'var(--lightModePrimary) 1px 0 5px'
		: 'var(--darkModeHighlight) 0px 0px 20px';
	$: textStroke = $lightMode ? '0px' : '2px var(--darkModeSplashTertiary)';
	$: boxShadow = $lightMode
		? '-3px 3px 0px 1px var(--darkBlueText)'
		: '0px 0px 0px 5px var(--darkModeHighlight), 0px 0px 30px 10px var(--darkModeHighlight), -5px 5px 0px 4px var(--darkModeHighlightSecondary)';
	$: border = $lightMode ? 'border: var(--lightText) solid 3px;' : 'border: none';
</script>

<div
	in:fly={{ y: -200, delay: 600 }}
	out:scale
	class={$lightMode ? 'light-animation' : 'dark-animation'}
	style="
	font-size: {fontSize}em; 
	width: {width}em;  
	background-color: {bgColor}; 
	color: {color}; 
	text-shadow: {textShadow}; 
	-webkit-text-stroke: {textStroke}; 
	box-shadow: {boxShadow}; 
	padding: {verticalPadding}em {horizontalPadding}em; {border};
	animation-delay: {animationDelay}ms;
	"
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

	/* .light-animation {
		animation-name: falling-sign;
		animation-delay: 2s;
		animation-duration: 1s;
		animation-timing-function: ease-in;
		animation-fill-mode: backwards;
	}

	@keyframes falling-sign {
		0% {
			opacity: 0%;
			transform: translateY(-20em);
		}
		22% {
			opacity: 0%;
		}
		25% {
			opacity: 100%;
		}
		70% {
			transform: rotate(-15deg);
		}
	} */
</style>
