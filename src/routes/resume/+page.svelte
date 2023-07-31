<script lang="ts">
	import { onMount } from 'svelte';
	import { lightMode, toggleLightMode } from '../../stores';

	let screenSize: number;
	const resumeHeight: number = 1400;
	const resumeWidth: number = 1000;

	const profileHeight: number = 600;
	const skillsHeight: number = profileHeight + 430;
	const contactHeight: number = skillsHeight + 230;

	const experienceHeight: number = 520;
	const accomplishmentsHeight: number = 400;
	const educationHeight: number = 175;

	let mounted = false;
	onMount(async () => {
		mounted = true;
	});
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="app">
	<main
		style={$lightMode
			? 'background-color: var(--darkGreenText);'
			: 'background-color: var(--darkModePrimary);'}
	>
		<div style="position: absolute; top: 0; right: 0;">
			<img
				on:click={toggleLightMode}
				on:keypress={toggleLightMode}
				src={$lightMode ? '/sun.png' : '/moon.png'}
				alt={$lightMode ? 'sun' : 'moon'}
				height="70"
				width="70"
			/>
		</div>

		<section
			class="resume-section"
			style="height: {resumeHeight}px; width: {resumeWidth}px; {$lightMode
				? 'background-color: var(--darkGreenText);'
				: 'background-color: var(--darkModePrimary);'}"
		>
			<div class="resume-profile-container">
				<div class="resume-profile-pill-container">
					<div class="resume-profile-picture-container">
						<img
							class="profile-picture"
							src="/project-icons/dompetriella.png"
							alt={'my face .png'}
						/>
					</div>
					<div
						class="resume-profile-name-container"
						style="{$lightMode
							? 'background-color: var(--lightModeSecondary);'
							: 'background-color: var(--darkModeSecondary);'}; height: {profileHeight}px"
					>
						<div style="margin-top: 180px">
							<div
								class="profile-name"
								style={$lightMode ? 'color: var(--darkText);' : 'color: var(--lightText);'}
							>
								DOMINIC PETRIELLA
							</div>
							<div
								class="subtitle-name"
								style={$lightMode ? 'color: var(--lightText);' : 'color: var(--darkModeHighlight);'}
							>
								Software Developer
							</div>

							<div
								class="tagline-name"
								style={$lightMode ? 'color: var(--darkText);' : 'color: var(--lightText);'}
							>
								Front End Designer with Full Stack Capabilities
							</div>
						</div>
					</div>

					<div
						class="resume-profile-skill-container"
						style="{$lightMode
							? 'background-color: var(--lightModeSplashSecondary);'
							: 'background-color: var(--darkModeSplashSecondary);'}; height: {skillsHeight}px"
					/>
					<div
						class="resume-profile-contact-container"
						style="{$lightMode
							? 'background-color: var( --lightModeSplashPrimary);'
							: 'background-color: var(--lightText);'}; height: {contactHeight}px"
					/>
				</div>
			</div>
			<div class="resume-information-container">
				<div class="work-experience-container info-box-container">
					<div class="info-box-title">Work Experience</div>
					<div
						class="info-box"
						style="{$lightMode
							? 'background-color: var(--lightModeSecondary);'
							: 'background-color: var(--darkModeSecondary);'}; height: {experienceHeight}px"
					/>
				</div>
				<div class="info-box-container">
					<div class="info-box-title">Accomplishments</div>
					<div
						class="info-box"
						style="{$lightMode
							? 'background-color: var(--lightModeSplashSecondary);'
							: 'background-color: var(--darkModeSplashSecondary);'}; height: {accomplishmentsHeight}px"
					/>
				</div>
				<div class="info-box-container">
					<div class="info-box-title">Education</div>
					<div
						class="info-box"
						style="{$lightMode
							? 'background-color: var( --lightModeSplashPrimary);'
							: 'background-color: var(--lightText);'}; height: {educationHeight}px"
					/>
				</div>
			</div>
		</section>

		<section class="sample-work-section">
			<div
				class="sample-work-title-container"
				style={$lightMode
					? 'background-color: var( --lightModeSecondary);'
					: 'background-color: var(--lightText);'}
			>
				<div
					class="sample-work-title"
					style={$lightMode ? 'color: var( --lightText);' : 'color: var(--darkText);'}
				>
					Sample Work
				</div>
			</div>
			<div
				class="sample-work-body-container"
				style={$lightMode
					? 'background-color: var(--lightText);'
					: 'background-color: var(--darkModeSplashSecondary);'}
			>
				<div />
			</div>
		</section>
	</main>
</div>

<style>
	.sample-work-section {
		padding-left: 1em;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.sample-work-body-container {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.sample-work-title-container {
		display: flex;
		justify-content: center;
	}

	.sample-work-title {
		padding-top: 2em;
		padding-bottom: 0.1em;
		font-size: 2em;
		letter-spacing: 2px;
	}

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

	.resume-information-container {
		padding-top: 6em;
		width: 530px;
		display: flex;
		flex-direction: column;
	}

	main {
		display: flex;
		justify-content: space-evenly;
		height: 100%;
	}

	.resume-section {
		border-radius: 1em 0em 0em 1em;
		display: flex;
	}

	.resume-profile-container {
		width: 465px;
		height: 100%;
		display: flex;

		justify-content: center;
	}

	.resume-profile-pill-container {
		width: 410px;
		position: absolute;
		padding-top: 7em;
		display: flex;
		justify-content: center;
	}

	.resume-profile-picture-container {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 16em;
		height: 16em;
		background-color: white;
		border-radius: 50%;
		z-index: 4;
		margin-top: -5em;
		overflow: hidden;
	}

	.profile-picture {
		margin-top: 1em;
		max-width: 98%;
		max-height: 98%;
		object-fit: contain;
	}

	.resume-profile-name-container {
		position: absolute;
		width: 100%;
		height: 620px;
		border-radius: 5em;
		margin-top: -5px;
		z-index: 3;
		display: flex;
		justify-content: center;
	}

	.profile-name {
		font-size: 3em;
		text-align: center;
		letter-spacing: 2px;
	}

	.subtitle-name {
		padding-top: 5px;
		font-size: 1.2em;
		text-align: center;
		letter-spacing: 2px;
	}

	.tagline-name {
		padding-top: 1.5em;
		font-size: 2.2em;
		text-align: center;
		letter-spacing: 2px;
	}

	.resume-profile-skill-container {
		position: absolute;
		width: 100%;
		height: 1070px;
		border-radius: 5em;
		z-index: 2;
	}

	.resume-profile-contact-container {
		position: absolute;
		width: 100%;
		height: 1260px;
		border-radius: 5em;
	}
</style>
