<script lang="ts">
	import { lightMode } from '../stores';
	import HeaderSign from './header-sign.svelte';
	import ProjectItem from './project-item.svelte';

	export let projectItems: any = [];
	export let text: string = 'TEXT';
	export let expanded: boolean = false;

	$: textColor = $lightMode ? 'var(--lightText)' : 'var(--darkText)';
	$: primarySplash = $lightMode ? 'var(--lightModeSplashPrimary)' : 'var(--darkModeSplashPrimary)';
	$: secondarySplash = $lightMode
		? 'var(--lightModeSplashSecondary)'
		: 'var(--darkModeSplashSecondary)';
	$: tertiarySplash = $lightMode
		? 'var(--lightModeSplashTertiary)'
		: 'var(--darkModeSplashTertiary)';
</script>

<div class="splash-body">
	{#if !expanded}
		<div
			on:click={() => (expanded = true)}
			on:keypress={() => (expanded = true)}
			class="primary-splash"
			style="background-color: {primarySplash}"
		>
			<div class="text" style="color: {textColor}">{text}</div>
		</div>
		<div class="secondary-splash" style="background-color: {secondarySplash}" />
		<div class="tertiary-splash" style="background-color: {tertiarySplash}" />
	{:else}
		<div class="expanded-body">
			<div
				class="sign-body"
				on:click={() => (expanded = false)}
				on:keypress={() => (expanded = true)}
			>
				<HeaderSign {text} verticalPadding={0.2} horizontalPadding={2} width={2} />
			</div>
			<div class="project-items">
				{#each projectItems as projectItem}
					<ProjectItem header={projectItem.header} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.splash-body {
		width: 11em;
		position: relative;
		display: flex;
		justify-content: center;
		padding: 0em 3em;
	}

	.expanded-body {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

	.sign-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 7.5em;
		width: 7.5em;
		left: 1.7em;
		top: 2.7em;
		cursor: pointer;
	}

	.project-items {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.primary-splash {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 7.5em;
		width: 7.5em;
		left: 4.7em;
		top: 2.7em;
		border-radius: 50%;
		background-color: white;
		z-index: 3;
		box-shadow: 0px 3px 0px 1px rgba(0, 0, 0, 0.25);
		cursor: pointer;
	}

	.text {
		position: absolute;
		font-size: 1.6em;
		letter-spacing: 2px;
		user-select: none;
	}

	.secondary-splash {
		position: absolute; /* Add position absolute */
		height: 9em;
		width: 9em;
		left: 4em;
		top: 1.5em;
		border-radius: 50%;
		background-color: grey;
		z-index: 2;
	}

	.tertiary-splash {
		position: absolute; /* Add position absolute */
		height: 11em;
		width: 11em;
		border-radius: 50%;
		background-color: black;
		z-index: 1;
	}

	/* mobile */
	@media (max-width: 480px) {
		.splash-body {
			margin-bottom: 12em;
		}
	}

	/* desktop */
	@media (min-width: 480px) {
		.splash-body {
			margin: 7em 2em;
		}
	}
</style>
