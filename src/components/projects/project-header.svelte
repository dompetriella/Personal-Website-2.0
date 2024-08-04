<script>
	import { Theme } from '../../models/theme';
	import { lightMode } from '../../stores';
	$: textColor = $lightMode ? Theme.darkGreenText : Theme.lightText;
	$: lineColor = $lightMode ? Theme.lightModeSecondary : Theme.darkModeHighlight;
</script>

<div class="project-header-desktop">
	<h1 style="color: {textColor}" class="project-title">PROJECTS</h1>
	<div style="background-color: {lineColor}" class="line" />
	<div style="background-color: {lineColor}" class="mid-line line" />
	<div style="background-color: {lineColor}" class="bottom-line line" />
</div>

<style>

	h1 {
		padding: 0;
		margin: 0;
	}

	.line {
		margin-bottom: 0.75em;
		height: 0.25em;
		width: 22em;
		border-radius: 1px;
	}

	.project-header-desktop {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.project-title {
		font-size: 3.5em;
		letter-spacing: 5px;
		margin-right: 0.4em;
	}

	.mid-line {
		margin-right: 1em;
	}

	.bottom-line {
		margin-right: 2em;
	}
</style>
