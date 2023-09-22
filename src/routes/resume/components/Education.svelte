<script lang="ts">
	import { Theme } from '../../../models/theme';
	import { lightMode } from '../../../stores';
	import { educationContent } from '../content/EducationContent';
	export let educationHeight: number;
	export let isMobile: boolean;
	$: bgColor = $lightMode ? Theme.lightModeSplashPrimary : Theme.lightText;
	$: textColor = $lightMode ? Theme.darkText : Theme.lightText;
	$: filterPercentage = $lightMode ? 105 : 90;

	let height = isMobile ? '' : 'height: ' + educationHeight + 'px;';
</script>

<div class="info-box-container">
	<div class="info-box-title">Education</div>
	<div class="info-box" style="background-color: {bgColor}; color: {textColor}; {height}">
		<div
			class="education-info-container"
			style="background-color: {bgColor}; filter: brightness({filterPercentage}%);"
		>
			{#each educationContent as education}
				<h3>{education.school}</h3>
				<h4 class="under-title">{education.degreeType} - {education.year}</h4>
				<div class="education-details">
					<h4>{education.degreeTitle}: {education.degree}</h4>
					<h4>{education.secondaryDegreeTitle}: {education.secondaryDegree}</h4>
					<h4 class="under-title"><i>{education.auxiliary}</i></h4>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.education-details {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h4 {
		text-align: left;
		font-size: 1.2em;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 1.6px;
		margin: 0px;
		padding: 1em;
	}

	h3 {
		text-align: left;
		font-size: 2em;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 1.6px;
		margin: 0px;
		padding: 0em 1em 0em 0.6em;
	}

	.under-title {
		padding-top: 0em;
	}

	.education-info-container {
		display: flex;
		color: var(--darkText);
		flex-direction: column;
		width: 90%;
		border-radius: 0.5em;
		padding: 2em 0em;
	}

	.info-box-title {
		font-size: 2em;
		letter-spacing: 4px;
		color: white;
		padding: 0.5em;
	}

	.info-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		border-radius: 1em;
		padding: 2em 0em;
	}

	.info-box-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media screen and (min-width: 1024px) {
		.info-box-title {
			font-size: 1.1em;
			letter-spacing: 2px;
			color: white;
			padding: 0.5em;
		}

		.info-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 464px;
			border-radius: 10px;
			margin-bottom: 1.5em;
			padding: 0px;
		}

		.info-box-container {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.education-info-container {
			display: flex;
			color: var(--darkText);
			flex-direction: column;
			width: 420px;
			height: 136px;
			border-radius: 5px;
			padding: 0px;
		}

		h4 {
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			letter-spacing: 1.6px;
			margin: 0px;
			align-self: center;
			text-align: center;
			padding: 0px;
		}

		h3 {
			align-self: center;
			font-size: 22px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			letter-spacing: 2.2px;
			margin: 0px;
			padding: 0px;
		}
	}
</style>
