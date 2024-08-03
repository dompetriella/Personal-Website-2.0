<script lang="ts">
	import { lightMode } from '../../stores';
	import ActionButton from '../action-button.svelte';
	import { ItemType } from '../../models/projects';
	import { Theme } from '../../models/theme';

	export let itemType: ItemType = ItemType.Code;

	export let header: string = 'Placeholder';
	export let subheader: string = '';
	export let imageFileName: string = '';
	export let imageAlt: string = '';
	export let imageList: CustomImage[] = [];

	export let status: string = 'Work in Progress';
	export let info: string;

	export let sourceCodeLink: string;
	export let languageUsed: string = 'Svelte';

	export let hasButton: boolean = false;
	export let buttonText: string = 'Visit Site';
	export let buttonRedirectURL: string = '';

	$: headerTextColor = $lightMode ? Theme.darkGreenText : Theme.lightText;
	$: subTextColor = $lightMode ? Theme.lightModePrimary : Theme.darkModeSplashSecondary;

	$: highlight = $lightMode ? Theme.lightText : Theme.darkModeHighlight;

	$: containerColor = $lightMode ? Theme.lightModeSecondary : 'var(--darkModeSecondary)';
	$: containerBoxShadowColor = $lightMode ? Theme.darkGreenText : Theme.darkText;
</script>

<div
	style="background-color: {containerColor}; box-shadow: -5px 5px 0px 3px {containerBoxShadowColor};"
	class="project-item-container"
>
	<div class="project-item-data">
		<div class="heading-container">
			<div class="heading-text">
				<h3 style="color: {headerTextColor}; font-size: 1.5em">{header.toUpperCase()}</h3>
				<h4 style="color: {subTextColor}">{subheader}</h4>
			</div>

			<div style="width: 4em; height: 4em">
				{#if imageFileName != ''}
					<img src="/project-icons/{imageFileName}" alt={imageAlt} />
				{/if}
			</div>
		</div>
		{#if itemType != ItemType.Art}
			<div class="status-text">
				<h3 style="color: {headerTextColor}; padding-right: 1em;">STATUS:</h3>
				<p style="color: {subTextColor}">{status}</p>
			</div>
		{/if}

		{#if info}
			<div class="status-text">
				<p style="color: {subTextColor}">
					{info}
				</p>
			</div>
		{/if}

		{#if itemType === ItemType.Art}
			<div class="preview-image-container">
				{#each imageList as image}
					<div
						style="background-color: {subTextColor}; box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.25);"
						class="preview-image-backdrop"
					>
						<img
							class="preview-image"
							src={`/project-icons/${image.imageFileName}`}
							alt={image.imageAltDescription}
						/>
					</div>
				{/each}
			</div>
		{/if}

		{#if itemType != ItemType.Art}
			<div class="source-info">
				<a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
					<p style="color: {highlight}; cursor: pointer">SOURCE CODE</p>
				</a>

				<p style="color: {subTextColor}">{languageUsed}</p>
			</div>
		{/if}

		{#if hasButton}
			<a href={buttonRedirectURL} target="_blank" rel="noopener noreferrer">
				<div class="site-button">
					<ActionButton
						buttonType={1}
						textSize={1.2}
						text={buttonText}
						horizontalPadding={4}
						route={buttonRedirectURL}
					/>
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

	h3 {
		padding: 0;
		margin: 0;
	}

	h4 {
		padding: 0;
		margin: 0;
	}

	p {
		margin: 0;
		padding: 0;
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

	.preview-image-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.preview-image-backdrop {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5em;
		height: 5em;
		padding: 0.5em;
		margin: 1em;
		border-radius: 1em;
		box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.5);
	}

	.preview-image {
		width: 4.8em;
		height: 4.87em;
	}
</style>
