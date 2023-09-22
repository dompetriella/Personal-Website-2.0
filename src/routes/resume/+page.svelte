<script lang="ts">
	import ProfileHeaderMobile from './components/Mobile/ProfileHeaderMobile.svelte';

	import Education from './components/Education.svelte';
	import Accomplishments from './components/Accomplishments.svelte';
	import WorkExperience from './components/WorkExperience.svelte';
	import ProfilePicture from './components/ProfilePicture.svelte';
	import ProfileContact from './components/ProfileContact.svelte';
	import ProfileSkill from './components/ProfileSkill.svelte';
	import ProfileHeader from './components/ProfileHeader.svelte';

	import { onMount } from 'svelte';
	import { lightMode, toggleLightMode } from '../../stores';
	import { titleTextContent } from './content/TitleText';
	import { contactInfoContent } from './content/ContactInfoContent';
	import { Theme } from '../../models/theme';

	let screenWidth: number;
	const resumeHeight: number = 1400;
	const resumeWidth: number = 1000;

	const profileHeight: number = 600;
	const skillsHeight: number = profileHeight + 430;
	const contactHeight: number = skillsHeight + 230;

	const experienceHeight: number = 520;
	const accomplishmentsHeight: number = 400;
	const educationHeight: number = 175;

	// allows for easily switching out content
	// changing the index, changes what's shown
	const titleText = titleTextContent[0];
	const contactInfo = contactInfoContent[0];

	$: bgColor = $lightMode
		? `background-color: ${Theme.darkGreenText};`
		: `background-color: ${Theme.darkModePrimary};`;

	function handlePrintClick() {
		let printContents = document.getElementsByClassName('resume-section');

		window.print();
	}

	let mounted = false;
	onMount(async () => {
		mounted = true;
	});

	$: isMobile = screenWidth >= 1024 ? false : true;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if mounted}
	<div class="app">
		<nav style={bgColor}>
			<div style="cursor: pointer; margin-right: auto;">
				<a href={'/'}>
					<img
						src={$lightMode ? '/back-light.png' : '/back-dark.png'}
						alt="return to main website"
						height="50"
						width="50"
					/>
				</a>
			</div>
			<!-- not quite ready yet -->
			<!-- <div style="cursor: pointer">
				<img
					on:click={handlePrintClick}
					on:keypress={handlePrintClick}
					src={$lightMode ? '/download-light.png' : '/download-dark.png'}
					alt="download resume"
					height="45"
					width="50"
				/>
			</div> -->
			<div style="cursor: pointer">
				<img
					on:click={toggleLightMode}
					on:keypress={toggleLightMode}
					src={$lightMode ? '/sun.png' : '/moon.png'}
					alt={$lightMode ? 'sun' : 'moon'}
					height="70"
					width="70"
				/>
			</div>
		</nav>
		<main
			style={bgColor}
		>
			{#if !isMobile}
				<section
					class="resume-section"
					id="section-to-print"
					style="height: {resumeHeight}px; width: {resumeWidth}px; background-color: {bgColor}"
				>
					<div class="resume-profile-container">
						<div class="resume-profile-pill-container">
							<ProfilePicture />
							<ProfileHeader {profileHeight} {titleText} />
							<ProfileSkill {skillsHeight} {isMobile} />
							<ProfileContact {contactHeight} {contactInfo} {isMobile} />
						</div>
					</div>
					<div class="resume-information-container">
						<WorkExperience {experienceHeight} {isMobile} />
						<Accomplishments {accomplishmentsHeight} {isMobile} />
						<Education {educationHeight} {isMobile} />
					</div>
				</section>
			{:else}
				<div class="resume-profile-container-m">
					<ProfileHeaderMobile {titleText} />
					<ProfileSkill {skillsHeight} {isMobile} />
					<ProfileContact {contactHeight} {contactInfo} {isMobile} />
					<div style="margin-top: 5em;">
						<WorkExperience {experienceHeight} {isMobile} />
						<Accomplishments {accomplishmentsHeight} {isMobile} />
						<Education {educationHeight} {isMobile} />
					</div>
				</div>
			{/if}
		</main>
	</div>
{/if}

<style>
	nav {
		display: flex;
		justify-content: end;
		align-items: center;
		padding-left: 16px;
	}

	.app {
		display: flex;
		flex-direction: column;
	}

	.resume-profile-container-m {
		display: flex;
		flex-direction: column;
		padding-bottom: 5em;
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
