<script lang="ts">
	import { lightMode } from '../stores';

	export let text: string = 'WELCOME';
	export let fontSize: number = 2.7;
	export let width: number = 6;
	export let verticalPadding: number = 0.2;
	export let horizontalPadding: number = 0;

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
	style="font-size: {fontSize}em; width: {width}em;  background-color: {bgColor}; color: {color}; text-shadow: {textShadow}; -webkit-text-stroke: {textStroke}; box-shadow: {boxShadow}; padding: {verticalPadding}em {horizontalPadding}em; {border}"
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
</style>
