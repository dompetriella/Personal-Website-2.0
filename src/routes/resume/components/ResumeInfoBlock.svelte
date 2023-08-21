<script lang="ts">
	import { lightMode, toggleLightMode } from '../../../stores';
	import type { ResumeInformationContent } from '../models/ResumeInformationContent';
	export let bgColor: string;
	export let textColor: string;
	export let informationContent: ResumeInformationContent;

	export let height: number = 230;

	$: filterPercentage = $lightMode ? 105 : 90;
</script>

<div
	class="resume-information-content-container"
	style="background-color: {bgColor}; filter: brightness({filterPercentage}%); height: {height}px;"
>
	<div>
		<div style="color: {textColor}">
			<h2>{informationContent.title}</h2>
			<div class="subtitle-text">
				<h4>{informationContent.location}</h4>
				<h4>{informationContent.timeline}</h4>
			</div>
		</div>
	</div>

	<div class="bulletpoint-container">
		<ul style="color: {textColor}">
			{#each informationContent.information as bulletpoint}
				<li>
					{bulletpoint}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.bulletpoint-container {
		display: flex;
		align-items: center;
		height: 100%;
		padding-right: 20px;
	}

	li {
		font-size: 17px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.resume-information-content-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.subtitle-text {
		display: flex;
		justify-content: space-evenly;
	}

	h4 {
		text-align: center;
		font-family: Alata;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 1.6px;
		margin: 0px;
	}

	h2 {
		text-align: center;
		font-size: 28px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 2.8px;
		padding: 5px 0px;
		margin: 0px;
	}

	.resume-information-content-container {
		display: flex;
		flex-direction: column;
		height: 230px;
		width: 420px;
		border-radius: 5px;
	}
</style>
