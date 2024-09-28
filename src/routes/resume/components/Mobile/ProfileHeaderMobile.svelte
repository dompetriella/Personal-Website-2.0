<script lang="ts">
	import ProfilePicture from '../ProfilePicture.svelte';
	import { lightMode } from '../../../../stores';
	import type { TitleText } from '../../models/TitleText';

	export let titleText: TitleText;
</script>

<div
	class="profile-header-m"
	style="{$lightMode
		? 'background-color: var(--lightModeSecondary);'
		: 'background-color: var(--darkModeSecondary);'};"
>
	<div class="header-top-area">
		<div>
			<div
				class="profile-name"
				style={$lightMode ? 'color: var(--darkText);' : 'color: var(--lightText);'}
			>
				{titleText.name.toUpperCase()}
			</div>
			<div
				class="subtitle-name"
				style={$lightMode ? 'color: var(--darkText);' : 'color: var(--lightText);'}
			>
				{titleText.subTitle}
			</div>
		</div>
		<div style="height: 8em; width: 8em;">
			<ProfilePicture size={8} />
		</div>
	</div>
	<div
		class="tagline-name"
		style={$lightMode ? 'color: var(--darkText);' : 'color: var(--lightText);'}
	>
		{titleText.tagline}
	</div>
</div>

<style>
	.header-top-area {
		display: flex;
		justify-content: space-around;
		padding: 0em 1em;
	}

	.profile-name {
		font-size: 2em;
		text-align: center;
		letter-spacing: 2px;
		padding: 0px 10px;
	}

	.subtitle-name {
		padding-top: 5px;
		font-size: 1.2em;
		text-align: center;
		letter-spacing: 2px;
	}

	.tagline-name {
		padding-top: 1.5em;
		font-size: 1.7em;
		text-align: center;
		letter-spacing: 2px;
		margin: 0px 50px;
	}

	.profile-header-m {
		padding: 5em 0em;
		display: flex;
		flex-direction: column;
		width: 100vw;
		z-index: 2;
		border-radius: 0em 0em 2.5em 2.5em;
		display: flex;
		justify-content: center;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	}
</style>
