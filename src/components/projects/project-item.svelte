<script lang="ts">
	import { lightMode } from '../../stores';
	import ActionButton from '../action-button.svelte';
	import { ItemType } from '../../models/projects';

	export let itemType: ItemType = ItemType.Code;

	export let header: string = 'Placeholder';
	export let subheader: string = '';
	export let imageFileName: string = '';
	export let imageAlt: string = '';

	export let status: string = 'Work in Progress';
	export let info: string;

	export let sourceCodeLink: string;
	export let languageUsed: string = 'Svelte';

	export let hasButton: boolean = false;
	export let buttonText: string = 'Visit Site';
	export let buttonRedirectURL: string = '';

	$: headerTextColor = $lightMode ? 'var(--darkGreenText )' : 'var(--lightText)';
	$: subTextColor = $lightMode ? 'var(--lightModePrimary)' : 'var(--darkModeSplashSecondary)';

	$: highlight = $lightMode ? 'var(--lightText)' : 'var(--darkModeHighlight)';

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

			<div style="width: 4em; height: 4em">
				{#if imageFileName != ''}
					<img src="/project-icons/{imageFileName}" alt={imageAlt} />
				{/if}
			</div>
		</div>
		<div class="status-text">
			<div style="color: {headerTextColor}; padding-right: 1em;">STATUS:</div>
			<div style="color: {subTextColor}">{status}</div>
		</div>

		{#if info}
			<div class="status-text">
				<div style="color: {subTextColor}">
					{info}
				</div>
			</div>
		{/if}

		{#if itemType != ItemType.Art}
			<div class="source-info">
				<a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
					<div style="color: {highlight}; cursor: pointer">SOURCE CODE</div>
				</a>

				<div style="color: {subTextColor}">{languageUsed}</div>
			</div>
		{/if}

		{#if hasButton}
			<a href={buttonRedirectURL} target="_blank" rel="noopener noreferrer">
				<div class="site-button">
					<ActionButton buttonType={1} textSize={1.2} text={buttonText} horizontalPadding={4} />
				</div>
			</a>
		{/if}
	</div>
</div>

<style>
	a {
		text-decoration: none;
	}

	img {
		height: 100%;
		max-width: 100%;
		object-fit: scale-down;
	}
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
