<script lang="ts">
	import { lightMode } from '../../../stores';
	export let educationHeight: number;
</script>

<div class="info-box-container">
	<div class="info-box-title">Education</div>
	<div
		class="info-box"
		style="{$lightMode
			? 'background-color: var( --lightModeSplashPrimary);'
			: 'background-color: var(--lightText);'}; height: {educationHeight}px"
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
