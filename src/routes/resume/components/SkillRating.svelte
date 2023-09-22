<script lang="ts">
	import { Theme } from '../../../models/theme';
	import { lightMode } from '../../../stores';
	import { maxSkillNodes } from '../content/SkillNodeContent';

	const skillNodes = maxSkillNodes;
	export let title: string;
	export let filledNodes: number;

	$: filledNodeColor = $lightMode ? Theme.lightModeSecondary : Theme.darkModeHighlight;

	const nodeList = Array.from({ length: skillNodes }, (_, index) => index < filledNodes);
</script>

<div class="skill-rating-container">
	<h3>{title}</h3>
	<div class="node-container">
		{#each nodeList as isNodeFilled}
			<div
				style="background-color: {isNodeFilled ? filledNodeColor : Theme.lightText};"
				class="skill-node"
			/>
		{/each}
	</div>
</div>

<style>
	.skill-rating-container {
		margin: 6px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.node-container {
		display: flex;
		flex-direction: row;
	}

	.skill-node {
		width: 34px;
		height: 42px;
		border-radius: 5px;
		margin-right: 8px;
	}

	h3 {
		font-family: Alata;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 2.4px;
		padding-bottom: 3px;
		margin: 0px;
		color: var(--lightText);
	}
</style>
