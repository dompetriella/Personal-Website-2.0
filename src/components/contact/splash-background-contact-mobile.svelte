<script lang="ts">
	import { lightMode } from '../../stores';
	import ActionButton from '../action-button.svelte';
	import ContactForm from './contact-form.svelte';

	$: textColor = $lightMode ? 'var(--darkText)' : 'var(--lightText)';
	$: primarySplash = $lightMode ? 'var(--lightModeSplashPrimary)' : 'var(--darkModeSplashPrimary)';
	$: secondarySplash = $lightMode
		? 'var(--lightModeSplashSecondary)'
		: 'var(--darkModeSplashSecondary)';
	$: tertiarySplash = $lightMode
		? 'var(--lightModeSplashTertiary)'
		: 'var(--darkModeSplashTertiary)';

	$: listTextColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkText)';
</script>

<div class="circles-container">
	<div class="contact-anchor" id="contact-m" />
	<div style="color: {textColor}" class="text">CONTACT</div>
	<div style="background-color:{primarySplash};" class="primary-circle" />
	<div style="background-color:{secondarySplash};" class="secondary-circle" />
	<div style="background-color:{tertiarySplash};" class="tertiary-circle" />
	<div class="contact-area">
		<!-- <ActionButton text="RESUMÉ" buttonType={1} textSize={2} /> -->
		<ul style="color: {listTextColor}">
			<li>Website freelance</li>
			<li>UI/UX design</li>
			<li>App development</li>
			<li>Game dev</li>
			<li>Music composition</li>
			<li>Or just to chat!</li>
		</ul>
		<ContactForm width={20} />
	</div>
</div>

<style>
	.contact-anchor {
		margin-top: -3em;
	}

	.contact-area {
		position: absolute;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		height: 90em;
		width: 100vw;
		margin-top: 11em;
		z-index: 5;
	}

	.circles-container {
		position: relative;
		overflow: hidden;
		height: 90em;
		width: 100vw;
	}

	.text {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 2em;
		letter-spacing: 2px;
		z-index: 4;
		margin-left: 0.5em;
	}

	.primary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 48em;
		width: 46em;
		border-radius: 50%;
		z-index: 3;
		margin-right: -15em;
		margin-top: 5.5em;
	}

	.secondary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 55em;
		width: 56em;
		border-radius: 50%;
		z-index: 2;
		margin-right: -18em;
		margin-top: 3.5em;
	}

	.tertiary-circle {
		position: absolute;
		top: 0;
		right: 0;
		height: 64em;
		width: 62em;
		border-radius: 50%;
		z-index: 1;
		margin-right: -15em;
		margin-top: 1.5em;
	}

	ul li {
		margin-top: 2em;
		margin-bottom: 2em;
		font-size: 1.2em;
		letter-spacing: 3px;
	}

	ul {
		margin-top: 1em;
	}
</style>
