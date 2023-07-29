<script lang="ts">
	import { onMount } from 'svelte';
	import { lightMode, toggleLightMode } from '../../stores';

	let screenSize: number;
	let resumeHeight: number = 87.5;
	let resumeWidth: number = 62.5;
	$: lightModeToggle = $lightMode ? 'light-toggle-animation' : 'dark-toggle-animation';

	let mounted = false;
	onMount(async () => {
		mounted = true;
	});
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="app">
	<main
		style={$lightMode
			? 'background-color: var(--darkGreenText);'
			: 'background-color: var(--darkModePrimary);'}
	>
		<div style="position: absolute; top: 0; right: 0;">
			<img
				on:click={toggleLightMode}
				on:keypress={toggleLightMode}
				class={lightModeToggle}
				src={$lightMode ? '/sun.png' : '/moon.png'}
				alt={$lightMode ? 'sun' : 'moon'}
				height="70"
				width="70"
			/>
		</div>

		<div
			class="resume-container"
			style="height: {resumeHeight}em; width: {resumeWidth}em; {$lightMode
				? 'background-color: var(--darkGreenText);'
				: 'background-color: var(--darkModePrimary);'}"
		>
			<div class="resume-profile-container">
				<div class="resume-profile-pill-container">
					<div class="resume-profile-picture-container" />
					<div
						class="resume-profile-name-container"
						style={$lightMode
							? 'background-color: var(--lightModeSecondary);'
							: 'background-color: var(--darkModeSplashTertiary);'}
					/>
					<div
						class="resume-profile-skill-container"
						style={$lightMode
							? 'background-color: var(--lightModeSplashSecondary);'
							: 'background-color: var(--darkModeSplashSecondary);'}
					/>
					<div
						class="resume-profile-contact-container"
						style={$lightMode
							? 'background-color: var( --lightModeSplashPrimary);'
							: 'background-color: var(--lightText);'}
					/>
				</div>
			</div>
			<div class="resume-information-container" />
		</div>
	</main>
</div>

<style>
	main {
		padding: 1em;
	}

	.resume-container {
		border-radius: 1em 0em 0em 1em;
		border: 1px solid pink;
		display: flex;
	}

	.resume-profile-container {
		width: 465px;
		height: 100%;
		display: flex;

		justify-content: center;
	}

	.resume-profile-pill-container {
		width: 410px;
		position: absolute;
		padding-top: 7em;
		display: flex;
		justify-content: center;
	}

	.resume-profile-picture-container {
		position: absolute;
		width: 16em;
		height: 16em;
		background-color: white;
		border-radius: 50%;
		z-index: 4;
		margin-top: -5em;
	}

	.resume-profile-name-container {
		position: absolute;
		width: 100%;
		height: 620px;
		background-color: red;
		border-radius: 5em;
		margin-top: -5px;
		z-index: 3;
	}

	.resume-profile-skill-container {
		position: absolute;
		width: 100%;
		height: 1000px;
		background-color: blue;
		border-radius: 5em;
		z-index: 2;
	}

	.resume-profile-contact-container {
		position: absolute;
		width: 100%;
		height: 1260px;
		background-color: purple;
		border-radius: 5em;
	}
	.resume-information-container {
	}
</style>
