<script lang="ts">
	import Education from './components/Education.svelte';

	import Accomplishments from './components/Accomplishments.svelte';

	import WorkExperience from './components/WorkExperience.svelte';

	import ProfilePicture from './components/ProfilePicture.svelte';

	import ProfileContact from './components/ProfileContact.svelte';

	import ProfileSkill from './components/ProfileSkill.svelte';

	import ProfileHeader from './components/ProfileHeader.svelte';

	import { onMount } from 'svelte';
	import { lightMode, toggleLightMode } from '../../stores';
	import Navbar from '../../components/navbar.svelte';

	let screenWidth: number;
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

<svelte:window bind:innerWidth={screenWidth} />

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
					<ProfilePicture />
					<ProfileHeader {profileHeight} />
					<ProfileSkill {skillsHeight} />
					<ProfileContact {contactHeight} />
				</div>
			</div>
			<div class="resume-information-container">
				<WorkExperience {experienceHeight} />
				<Accomplishments {accomplishmentsHeight} />
				<Education {educationHeight} />
			</div>
		</section>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
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
</style>
