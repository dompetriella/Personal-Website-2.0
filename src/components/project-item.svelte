<script lang="ts">
	import { lightMode } from '../stores';
	import ActionButton from './action-button.svelte';

	$: headerTextColor = $lightMode ? 'var(--darkText )' : 'var(--lightText)';
	$: subTextColor = $lightMode ? 'var(--lightText)' : 'var(--darkModeSplashSecondary)';

	$: containerColor = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeSecondary)';
	$: containerBoxShadowColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkText)';
</script>

<div
	style="background-color: {containerColor}; box-shadow: -5px 5px 0px 5px {containerBoxShadowColor};"
	class="project-item-container"
>
	<div class="project-item-data">
		<div class="heading-container">
			<div class="heading-text">
				<div style="color: {headerTextColor}; font-size: 1.5em">SIMPLE ROLLER</div>
				<div style="color: {subTextColor}">A SIMPLER WAY TO ROLL</div>
			</div>

			<div style="width: 4em; height: 4em; background-color: black" />
		</div>
		<div class="status-text">
			<div style="color: {headerTextColor}; padding-right: 1em;">STATUS:</div>
			<div style="color: {subTextColor}">FINISHED</div>
		</div>

		<div class="project-info">
			<div>ANDROID</div>
			<div>iOS</div>
		</div>

		<div class="source-info">
			<div style="color: {headerTextColor};">SOURCE CODE</div>
			<div style="color: {subTextColor}">FLUTTER</div>
		</div>

		<div class="site-button">
			<ActionButton buttonType={1} textSize={1.2} text={'VISIT SITE'} horizontalPadding={4} />
		</div>
	</div>
</div>

<style>
	.project-item-container {
		width: 18em;
		padding: 1em;
		border-radius: 0.5em;
		margin-top: 1.5em;
	}

	.project-item-data {
		display: flex;
		flex-direction: column;
	}

	.heading-container {
		display: flex;
		justify-content: space-between;
	}

	.heading-text {
		width: 12em;
		padding-bottom: 1em;
	}

	.status-text {
		display: flex;
		flex-direction: row;
		justify-content: start;
	}

	.project-info {
		padding: 1em 0;
	}

	.source-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.site-button {
		padding-top: 1em;
		display: flex;
		justify-content: center;
	}
</style>
