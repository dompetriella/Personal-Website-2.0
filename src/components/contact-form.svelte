<script lang="ts">
	import { lightMode } from '../stores';
	import ActionButton from './action-button.svelte';
	export let width: number;
	$: textColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkModeSplashPrimary)';
	$: contactBoxColor = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeSecondary)';
	$: contactBoxShadowColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkText)';

	$: inputBoxColor = $lightMode
		? 'var(--lightModeSplashSecondary)'
		: 'var(--darkModeSplashPrimary)';
	$: inputShadowColor = $lightMode
		? 'var(--lightModeSplashPrimary)'
		: 'var(--darkModeSplashSecondary)';
</script>

<div
	style="background-color: {contactBoxColor}; box-shadow: -5px 5px 0px 5px {contactBoxShadowColor}; width: {width}em"
	class="contact-form-area"
>
	<div>
		<div style="font-size: 1.5em; color: {textColor}; padding: 0.4em 0">NAME</div>
		<div
			style="width: {width * 0.85}em; background-color: {inputShadowColor}"
			class="input-container"
		>
			<input style="background-color: {inputBoxColor};" class="single-input" />
		</div>
	</div>

	<div>
		<div style="font-size: 1.5em; color: {textColor}; padding: 0.4em 0">EMAIL</div>
		<div
			style="width: {width * 0.85}em; background-color: {inputShadowColor}"
			class="input-container"
		>
			<input style="background-color: {inputBoxColor}" class="single-input" />
		</div>
	</div>

	<div>
		<div style="font-size: 1.5em; color: {textColor}; padding: 0.4em 0">MESSAGE</div>
		<div
			style="width: {width * 0.85}em; background-color: {inputShadowColor}"
			class="input-container"
		>
			<textarea style="background-color: {inputBoxColor}; height: 18em" class="multiline-input" />
		</div>
	</div>

	<div style="padding: 1em">
		<ActionButton text="SEND" />
	</div>
</div>

<style>
	.contact-form-area {
		border-radius: 1em;
		margin-bottom: 1.5em;
		display: flex;
		padding: 1em 0;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}

	.input-container {
		padding: 0.25em;
		border-radius: 0.5em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.single-input {
		height: 2em;
		padding: 0.5em;
		border-radius: 0.5em;
		width: 90%;
		border: none;
	}

	textarea:focus,
	input:focus {
		outline: 3px dotted var(--darkModeHighlight);
	}

	.multiline-input {
		padding: 0.5em;
		border-radius: 0.5em;
		width: 90%;
		border: none;
	}
</style>
