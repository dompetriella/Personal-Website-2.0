<script lang="ts">
	import { lightMode } from '../stores';
	import ActionButton from './action-button.svelte';
	import { ItemType } from '../models/projects';

	export const itemType: ItemType = ItemType.Code;

	export let header: String = 'Placeholder';
	export let subheader: String = '';
	export const imageString: String = '';

	export let status: String = 'Work in Progress';
	export let hasButton: Boolean = false;
	export let buttonText: String = 'Visit Site';

	export const sourceCodeLink: String = '';
	export let languageUsed: String = 'Svelte';

	$: headerTextColor = $lightMode ? 'var(--darkText )' : 'var(--lightText)';
	$: subTextColor = $lightMode ? 'var(--lightText)' : 'var(--darkModeSplashSecondary)';

	$: containerColor = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeSecondary)';
	$: containerBoxShadowColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkText)';
</script>

<div
	style="background-color: {containerColor}; box-shadow: -5px 5px 0px 3px {containerBoxShadowColor};"
	class="project-item-container"
>
	<div class="project-item-data">
		<div class="heading-container">
			<div class="heading-text">
				<div style="color: {headerTextColor}; font-size: 1.5em">{header.toUpperCase()}</div>
				<div style="color: {subTextColor}">{subheader}</div>
			</div>

			<div style="width: 4em; height: 4em; background-color: black" />
		</div>
		<div class="status-text">
			<div style="color: {headerTextColor}; padding-right: 1em;">STATUS:</div>
			<div style="color: {subTextColor}">{status}</div>
		</div>

		<div class="source-info">
			<div style="color: {headerTextColor}; cursor: pointer">SOURCE CODE</div>
			<div style="color: {subTextColor}">{languageUsed}</div>
		</div>

		{#if hasButton}
			<div class="site-button">
				<ActionButton buttonType={1} textSize={1.2} text={buttonText} horizontalPadding={4} />
			</div>
		{/if}
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
		flex-direction: column;
		justify-content: start;
		padding-bottom: 1em;
	}

	.source-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-top: 1em;
	}

	.site-button {
		padding-top: 1em;
		display: flex;
		justify-content: center;
	}
</style>
