<script lang="ts">
	import { onMount } from 'svelte';
	import { lightMode } from '../../../stores';

	export let accomplishmentsHeight: number;
</script>

<div class="info-box-container">
	<div class="info-box-title">Accomplishments</div>
	<div
		class="info-box"
		style="{$lightMode
			? 'background-color: var(--lightModeSplashSecondary);'
			: 'background-color: var(--darkModeSplashSecondary);'}; height: {accomplishmentsHeight}px"
	/>
</div>

<style>
	.info-box-title {
		font-size: 1.1em;
		letter-spacing: 2px;
		color: white;
		padding: 0.5em;
	}

	.info-box {
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
