<script lang="ts">
	import ResumeInfoBlock from './ResumeInfoBlock.svelte';
	import { workExperienceContent } from '../content/WorkExperienceContent';

	import { lightMode } from '../../../stores';
	import { Theme } from '../../../models/theme';
	export let experienceHeight: number;
	export let isMobile: boolean;

	$: bgColor = $lightMode ? Theme.lightModeSecondary : Theme.darkModeSecondary;
	$: textColor = $lightMode ? Theme.darkText : Theme.lightText;
	let height = isMobile ? '' : 'height: ' + experienceHeight + 'px;';
</script>

<div class="info-box-container">
	<div class="info-box-title">Work Experience</div>
	<div class="info-box" style="background-color: {bgColor};">
		{#each workExperienceContent as informationContent}
			<ResumeInfoBlock {bgColor} {textColor} {informationContent} {isMobile} />
		{/each}
	</div>
</div>

<style>
	.info-box-title {
		font-size: 2em;
		letter-spacing: 4px;
		color: white;
		padding: 0.5em;
	}

	.info-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		border-radius: 1em;
		padding-top: 2em;
	}

	.info-box-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 4em;
	}

	@media screen and (min-width: 1024px) {
		.info-box-title {
			font-size: 1.1em;
			letter-spacing: 2px;
			color: white;
			padding: 0.5em;
		}

		.info-box {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			width: 464px;
			border-radius: 10px;
			margin-bottom: 1.5em;
			padding-top: 2em;
		}

		.info-box-container {
			margin: 0em;
		}
	}
</style>
