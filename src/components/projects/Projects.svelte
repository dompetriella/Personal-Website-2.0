<script lang="ts">
	import SplashButton from './splash-button.svelte';
	import ProjectHeader from './project-header.svelte';
	import { lightMode } from '../../stores';
	import { gameProjects, artProjects, codeProjects } from '../../content/project-items-info';
	import { ItemType } from '../../models/projects';
	import { onMount } from 'svelte';

	let screenSize: number;
	const mobile: number = 480;
</script>

<svelte:window bind:innerWidth={screenSize} />

<section id="projects" class="projects-section">
	{#if screenSize > mobile}
		<div class="projects-header-desktop">
			<ProjectHeader />
		</div>
	{/if}
	<div class="splash-buttons">
		<SplashButton text="APPS"  projectItems={codeProjects} />
		<SplashButton text="ART" projectItems={artProjects} />
		<SplashButton text="GAMES"  projectItems={gameProjects} />
	</div>
</section>

<style>
	.splash-buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: start;
		flex-wrap: wrap;
	}

	.projects-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	/* mobile */
	@media (max-width: 480px) {
		.splash-buttons {
			row-gap: 5em;
			margin-bottom: 10em;
		}
	}

	/* desktop */
	@media (min-width: 480px) {
		.projects-section {
			padding: 5em 0em;
		}

		.splash-buttons {
			width: 100%;
		}
	}
</style>
