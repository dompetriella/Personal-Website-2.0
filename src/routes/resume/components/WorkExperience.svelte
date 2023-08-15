<script lang="ts">
	import { lightMode, toggleLightMode } from '../../../stores';
	export let experienceHeight: number;
</script>

<div class="work-experience-container info-box-container">
	<div class="info-box-title">Work Experience</div>
	<div
		class="info-box"
		style="{$lightMode
			? 'background-color: var(--lightModeSecondary);'
			: 'background-color: var(--darkModeSecondary);'}; height: {experienceHeight}px"
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
