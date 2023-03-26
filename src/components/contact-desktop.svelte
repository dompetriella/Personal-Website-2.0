<script lang="ts">
	import { lightMode } from '../stores';
	import ActionButton from './action-button.svelte';

	$: textColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkModeSplashPrimary)';
	$: contactBoxColor = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeSecondary)';
	$: contactBoxShadowColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkText)';
</script>

<div class="contact-area">
	<div class="contact-text-area">
		<div style="color: {textColor}" class="title">CONTACT</div>
		<ul style="color: {textColor}">
			<li>For website freelance</li>
			<li>For UI/UX design</li>
			<li>App development</li>
			<li>Game dev</li>
			<li>Music composition</li>
			<li>Or just to chat!</li>
		</ul>
		<div style="padding-top: 2em;">
			<ActionButton buttonType={1} text="RESUMÉ" />
		</div>
	</div>
	<div class="contact-input-area">
		<div
			style="background-color: {contactBoxColor}; box-shadow: -5px 5px 0px 5px {contactBoxShadowColor};"
			class="contact-form-area"
		/>
		<ActionButton text="SEND" />
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
		justify-content: space-between;
		align-items: start;
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

	.contact-form-area {
		height: 32em;
		width: 40em;
		border-radius: 1em;
		margin-bottom: 1.5em;
	}
</style>
