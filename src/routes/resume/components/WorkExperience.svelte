<script lang="ts">
	import ResumeInfoBlock from './ResumeInfoBlock.svelte';
	import { workExperienceContent } from '../content/WorkExperienceContent';

	import { lightMode } from '../../../stores';
	export let experienceHeight: number;

	$: bgColor = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeSecondary)';
	$: textColor = $lightMode ? 'var(--darkText)' : 'var(--lightText)';
</script>

<div class="info-box-container">
	<div class="info-box-title">Work Experience</div>
	<div class="info-box" style="background-color: {bgColor}; height: {experienceHeight}px">
		{#each workExperienceContent as informationContent}
			<ResumeInfoBlock {bgColor} {textColor} {informationContent} />
		{/each}
	</div>
</div>

<style>
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
	}

	.info-box-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
