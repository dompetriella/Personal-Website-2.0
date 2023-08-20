<script lang="ts">
	import { onMount } from 'svelte';
	import { lightMode } from '../../../stores';

	export let profileHeight: number;
</script>

<div
	class="resume-profile-name-container"
	style="{$lightMode
		? 'background-color: var(--lightModeSecondary);'
		: 'background-color: var(--darkModeSecondary);'}; height: {profileHeight}px"
>
	<div style="margin-top: 180px">
		<div
			class="profile-name"
			style={$lightMode ? 'color: var(--darkText);' : 'color: var(--lightText);'}
		>
			DOMINIC PETRIELLA
		</div>
		<div
			class="subtitle-name"
			style={$lightMode ? 'color: var(--lightText);' : 'color: var(--darkModeHighlight);'}
		>
			Software Developer
		</div>

		<div
			class="tagline-name"
			style={$lightMode ? 'color: var(--darkText);' : 'color: var(--lightText);'}
		>
			Front End Designer with Full Stack Capabilities
		</div>
	</div>
</div>

<style>
	.resume-profile-name-container {
		position: absolute;
		width: 100%;
		border-radius: 5em;
		margin-top: -5px;
		z-index: 3;
		display: flex;
		justify-content: center;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	}

	.profile-name {
		font-size: 3em;
		text-align: center;
		letter-spacing: 2px;
	}

	.subtitle-name {
		padding-top: 5px;
		font-size: 1.6em;
		text-align: center;
		letter-spacing: 2px;
	}

	.tagline-name {
		padding-top: 1.5em;
		font-size: 2em;
		text-align: center;
		letter-spacing: 2px;
		margin: 0px 50px;
	}
</style>
