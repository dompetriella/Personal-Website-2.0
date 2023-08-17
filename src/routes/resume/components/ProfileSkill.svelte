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
		<div class="skills-title-container">
			<h3 style={$lightMode ? 'color: var(--darkText);' : 'color: var(--lightText);'}>SKILLS</h3>
		</div>

		{#each skillNodeContent as skill}
			<SkillRating title={skill.title} filledNodes={skill.filledNodes} />
		{/each}
	</div>
</div>

<style>
	h3 {
		padding: 0px;
		margin: 0px;
		font-weight: 400;
		letter-spacing: 4px;
		font-size: 32px;
		writing-mode: sideways-lr;
		text-orientation: mixed;
	}

	.skills-title-container {
		position: absolute;
		right: 0;
		bottom: 0;
		margin-bottom: 180px;
		padding-right: 8px;
	}

	.skill-rating-container {
		display: flex;
		flex-direction: column;
		padding-bottom: 60px;
		margin-left: -20px;
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
