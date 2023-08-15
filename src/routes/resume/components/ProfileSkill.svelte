<script lang="ts">
	import { onMount } from 'svelte';
	import { lightMode } from '../../../stores';

	export let skillsHeight: number;

	let mounted = false;
	onMount(async () => {
		mounted = true;
	});
</script>

<div
	class="resume-profile-skill-container"
	style="{$lightMode
		? 'background-color: var(--lightModeSplashSecondary);'
		: 'background-color: var(--darkModeSplashSecondary);'}; height: {skillsHeight}px"
/>

<style>
	.resume-profile-skill-container {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: end;
		width: 100%;
		border-radius: 5em;
		z-index: 2;
	}
</style>
