<script lang="ts">
	import ContactForm from './contact-form.svelte';

	import { lightMode } from '../stores';
	import ActionButton from './action-button.svelte';

	$: textColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkModeSplashPrimary)';
	$: contactBoxColor = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeSecondary)';
	$: contactBoxShadowColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkText)';
</script>

<div class="contact-area">
	<div class="contact-text-area">
		<div style="color: {textColor}" class="title">CONTACT</div>
		<ActionButton buttonType={1} text="RESUMÉ" />
		<ul style="color: {textColor}">
			<li>For website freelance</li>
			<li>For UI/UX design</li>
			<li>App development</li>
			<li>Game dev</li>
			<li>Music composition</li>
			<li>Or just to chat!</li>
		</ul>
	</div>
	<div class="contact-input-area">
		<ContactForm width={40} />
	</div>
</div>

<style>
	.contact-area {
		display: flex;
		justify-content: space-around;
		width: 100vw;
		padding: 10em 0em;
	}

	.contact-text-area {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.title {
		font-size: 3.5em;
		letter-spacing: 8px;
	}

	ul li {
		padding: 1em;
		font-size: 1.2em;
		letter-spacing: 3px;
	}

	.contact-input-area {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: end;
	}

	@media (min-width: 481px) and (max-width: 1000px) {
		.contact-area {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}

		.contact-text-area {
			margin-left: -20em;
			margin-bottom: 3em;
		}
	}
</style>
