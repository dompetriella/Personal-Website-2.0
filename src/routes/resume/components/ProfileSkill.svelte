<script lang="ts">
	import SkillRating from './SkillRating.svelte';
	import { skillNodeContent } from '../content/SkillNodeContent';
	import { onMount } from 'svelte';
	import { lightMode } from '../../../stores';
	import { titleTextContent } from '../content/TitleText';
	import { Theme } from '../../../models/theme';

	export let skillsHeight: number;
	export let isMobile: boolean;

	let height = isMobile ? '' : 'height: ' + skillsHeight + 'px;';
	$: titleTextColor = $lightMode ? Theme.darkText : Theme.lightText;
</script>

<div
	class="resume-profile-skill-container"
	style="{$lightMode
		? `background-color: ${Theme.lightModeSplashSecondary};`
		: `background-color: ${Theme.darkModeSplashSecondary};`} {height}"
>
	<div style="display: flex; flex-direction: column">
		{#if isMobile}
			<h1 style="color: {titleTextColor};">SKILLS</h1>
		{/if}
		<div class="skill-rating-container">
			{#each skillNodeContent as skill}
				<SkillRating title={skill.title} filledNodes={skill.filledNodes} />
			{/each}
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: 2em;
		text-align: center;
		letter-spacing: 4px;
	}

	.skill-rating-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
	}

	.resume-profile-skill-container {
		display: flex;
		justify-content: center;
		border-radius: 2em;
		margin-top: -5em;
		z-index: 1;
		padding: 5em 0em 4em 0em;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	}

	@media screen and (min-width: 1024px) {
		.skill-rating-container {
			padding-bottom: 50px;
		}

		.resume-profile-skill-container {
			position: absolute;
			align-items: end;
			padding: 0em;
			margin: 0em;
			width: 100%;
			border-radius: 5em;
			z-index: 2;
			box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		}
	}
</style>
