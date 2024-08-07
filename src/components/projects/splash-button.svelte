<script lang="ts">
	import { fly, fade, slide, scale } from 'svelte/transition';
	import { circOut, linear, quadOut } from 'svelte/easing';
	import { lightMode } from '../../stores';
	import HeaderSign from '../header/header-sign.svelte';
	import ProjectItem from './project-item.svelte';
	import { Theme } from '../../models/theme';

	export let projectItems: Array<any> = [];
	export let text: string = 'TEXT';
	export let expanded: boolean = false;

	$: textColor = $lightMode ? Theme.lightText : Theme.darkText;
	$: primarySplash = $lightMode ? Theme.lightModeSplashPrimary : Theme.darkModeSplashPrimary;
	$: secondarySplash = $lightMode
		? Theme.lightModeSplashSecondary
		: Theme.darkModeSplashSecondary;
	$: tertiarySplash = $lightMode
		? Theme.lightModeSplashTertiary
		: Theme.darkModeSplashTertiary;
</script>

<div class="splash-body">
	{#if !expanded}
		<button
			in:fade={{ delay: 500 }}
			out:fade={{ delay: 100 }}
			on:click={() => (expanded = true)}
			on:keypress={() => (expanded = true)}
			class="primary-splash"
			style="background-color: {primarySplash}"
		>
			<div
				in:slide={{ delay: 700 }}
				out:slide={{ delay: 100 }}
				class="text"
				style="color: {textColor}"
			>
				{text}
			</div>
		</button>
		<div
			in:fade={{ delay: 300 }}
			out:fade={{ delay: 400 }}
			class="secondary-splash"
			style="background-color: {secondarySplash}"
		/>
		<div
			in:fade={{ delay: 200 }}
			out:fade={{ delay: 500 }}
			class="tertiary-splash"
			style="background-color: {tertiarySplash}"
		/>
	{:else}
		<div class="expanded-body">
			<div
				class="sign-body"
				on:click={() => (expanded = false)}
				on:keypress={() => (expanded = true)}
			>
				<HeaderSign
					{text}
					verticalPadding={0.2}
					horizontalPadding={2}
					width={2}
					animationDelay={300}
				/>
			</div>
			<div class="project-items">
				{#if $lightMode}
					{#each projectItems as projectItem, i}
						<div
							in:fly={{ duration: 750, delay: 450 + i * 150, easing: quadOut, y: 100 }}
							out:fade={{ delay: 100 * i }}
						>
							<ProjectItem {...projectItem} />
						</div>
					{/each}
				{:else}
					{#each projectItems as projectItem, i}
						<div
							in:fade={{ duration: 750, delay: 450 + i * 300, easing: linear }}
							out:fly={{ x: 200 * (i % 2 ? -1 : 1) }}
						>
							<ProjectItem {...projectItem} />
						</div>
					{/each}
				{/if}
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
		min-height: 9em;
		min-width: 9em;
		top: 3em;
		border-radius: 50%;
		outline: none;
		border: 0;
		z-index: 3;
		box-shadow: 0px 3px 0px 1px rgba(0, 0, 0, 0.25);
		cursor: pointer;
	}

	.primary-splash:hover {
		filter: brightness(120%);
	}

	.primary-splash:focus {
		border: 2px solid white;
		box-shadow: 0 0 16px 4px white;
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
