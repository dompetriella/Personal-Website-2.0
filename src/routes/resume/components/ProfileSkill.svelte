<script lang="ts">
	import SkillRating from './SkillRating.svelte';
	import { skillNodeContent } from '../content/SkillNodeContent';
	import { onMount } from 'svelte';
	import { lightMode } from '../../../stores';

	export let skillsHeight: number;

	$: filledNodeColor = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeHighlight)';
</script>

<div
	class="resume-profile-skill-container"
	style="{$lightMode
		? 'background-color: var(--lightModeSplashSecondary);'
		: 'background-color: var(--darkModeSplashSecondary);'}; height: {skillsHeight}px"
>
	<div class="skill-rating-container">
		{#each skillNodeContent as skill}
			<SkillRating title={skill.title} filledNodes={skill.filledNodes} />
		{/each}
	</div>
</div>

<style>
	.skill-rating-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-bottom: 50px;
	}

	.resume-profile-skill-container {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: end;
		width: 100%;
		border-radius: 5em;
		z-index: 2;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	}
</style>
