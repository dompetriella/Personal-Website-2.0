<script lang="ts">
	import { lightMode, toggleLightMode } from '../../../stores';
	import type { ResumeInformationContent } from '../models/ResumeInformationContent';
	export let bgColor: string;
	export let textColor: string;
	export let informationContent: ResumeInformationContent;
	export let isMobile: boolean;

	export let height: number = 230;
	let adjustedHeight = isMobile ? '' : 'height: ' + height + 'px;';
	$: filterPercentage = $lightMode ? 105 : 90;
</script>

<div
	class="resume-information-content-container"
	style="background-color: {bgColor}; filter: brightness({filterPercentage}%);"
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
		font-size: 1.25em;
		margin: 1em 0em;
		padding: 0.5em;
		font-weight: lighter;
	}

	.resume-information-content-container {
		display: flex;
		flex-direction: column;
		padding: 2em 2em;
		margin: 1.5em 1.5em;
		width: 90%;
		border-radius: 0.5em;
	}

	.subtitle-text {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding: 1.5em;
	}

	h4 {
		text-align: left;
		font-size: 1.2em;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 1.6px;
		margin: 0px;
	}

	h2 {
		text-align: left;
		font-size: 2em;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 2.8px;
		padding: 5px 0px;
		padding-left: 0.8em;
		margin: 0px;
	}

	@media screen and (min-width: 1024px) {
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

		.subtitle-text {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			padding: 0px;
		}

		li {
			margin: 0em;
			padding: 0em;
			font-size: 17px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		.resume-information-content-container {
			display: flex;
			flex-direction: column;
			height: 230px;
			width: 420px;
			border-radius: 5px;
			padding: 0px;
			margin: 0px;
		}
	}
</style>
