<script lang="ts">
	import ResumeInfoBlock from './ResumeInfoBlock.svelte';
	import { accomplishmentsContent } from '../content/AccomplishmentsContent';
	import { lightMode } from '../../../stores';

	$: bgColor = $lightMode ? 'var(--lightModeSplashSecondary)' : 'var(--darkModeSplashSecondary)';
	$: textColor = $lightMode ? 'var(--darkText)' : 'var(--lightText)';

	export let accomplishmentsHeight: number;
	export let isMobile: boolean;

	let height = isMobile ? '' : 'height: ' + accomplishmentsHeight + 'px;';
</script>

<div class="info-box-container">
	<div class="info-box-title">Applications</div>
	<div class="info-box" style="background-color: {bgColor}; {height}">
		{#each accomplishmentsContent as informationContent}
			<ResumeInfoBlock {bgColor} {textColor} {informationContent} height={165} {isMobile} />
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
		margin-bottom: 4em;
	}

	.info-box-container {
		display: flex;
		flex-direction: column;
		align-items: center;
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
			padding: 0em;
		}
	}
</style>
