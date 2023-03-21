<script>
	import { lightMode } from '../stores';
	$: textColor = $lightMode ? 'var(--darkGreenText)' : 'var(--lightText)';
	$: lineColor = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeHighlight)';
</script>

<div class="project-header-desktop">
	<div style="color: {textColor}" class="project-title">PROJECTS</div>
	<div style="background-color: {lineColor}" class="line" />
	<div style="background-color: {lineColor}" class="mid-line line" />
	<div style="background-color: {lineColor}" class="bottom-line line" />
</div>

<style>
	.line {
		margin-bottom: 0.75em;
		height: 0.25em;
		width: 20em;
		border-radius: 1px;
	}

	.project-header-desktop {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.project-title {
		font-size: 3em;
		padding-right: 0.6em;
		letter-spacing: 5px;
	}

	.mid-line {
		margin-right: 1em;
	}

	.bottom-line {
		margin-right: 2em;
	}
</style>
