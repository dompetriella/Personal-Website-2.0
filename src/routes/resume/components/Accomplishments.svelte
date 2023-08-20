<script lang="ts">
	import ResumeInfoBlock from './ResumeInfoBlock.svelte';
	import { accomplishmentsContent } from '../content/AccomplishmentsContent';
	import { lightMode } from '../../../stores';

	$: bgColor = $lightMode ? 'var(--lightModeSplashSecondary)' : 'var(--darkModeSplashSecondary)';
	$: textColor = $lightMode ? 'var(--darkText)' : 'var(--lightText)';

	export let accomplishmentsHeight: number;
</script>

<div class="info-box-container">
	<div class="info-box-title">Accomplishments</div>
	<div class="info-box" style="background-color: {bgColor}; height: {accomplishmentsHeight}px;">
		{#each accomplishmentsContent as informationContent}
			<ResumeInfoBlock {bgColor} {textColor} {informationContent} height={165} />
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
