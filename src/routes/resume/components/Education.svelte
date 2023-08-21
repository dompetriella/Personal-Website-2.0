<script lang="ts">
	import { lightMode } from '../../../stores';
	import { educationContent } from '../content/EducationContent';
	export let educationHeight: number;
	$: bgColor = $lightMode ? 'var( --lightModeSplashPrimary)' : 'var(--lightText)';
	$: textColor = $lightMode ? 'var(--darkText)' : 'var(--lightText)';
	$: filterPercentage = $lightMode ? 105 : 90;
</script>

<div class="info-box-container">
	<div class="info-box-title">Education</div>
	<div
		class="info-box"
		style="background-color: {bgColor}; color: {textColor}; height: {educationHeight}px"
	>
		<div
			class="education-info-container"
			style="background-color: {bgColor}; filter: brightness({filterPercentage}%);"
		>
			{#each educationContent as education}
				<h3>{education.school}</h3>
				<h4>{education.degreeType} - {education.year}</h4>
				<div class="education-details">
					<h4>{education.degreeTitle}: {education.degree}</h4>
					<h4>{education.secondaryDegreeTitle}: {education.secondaryDegree}</h4>
					<h4><i>{education.auxiliary}</i></h4>
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
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 1.6px;
		margin: 0px;
		align-self: center;
		text-align: center;
	}

	h3 {
		align-self: center;
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 2.2px;
		margin: 0px;
		padding-top: 5px;
	}

	.info-box-title {
		font-size: 1.1em;
		letter-spacing: 2px;
		color: white;
		padding: 0.5em;
	}

	.education-info-container {
		display: flex;
		color: var(--darkText);
		flex-direction: column;
		width: 420px;
		height: 136px;
		border-radius: 5px;
	}

	.info-box {
		display: flex;
		justify-content: center;
		align-items: center;
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
