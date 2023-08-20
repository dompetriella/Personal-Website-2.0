<script lang="ts">
	import { lightMode } from '../../../stores';
	import MailIcon from './icons/mail-icon.svelte';
	import PhoneIcon from './icons/phone-icon.svelte';
	import WebIcon from './icons/web-icon.svelte';
	export let contactHeight: number;

	$: fillColor = $lightMode ? '#FFF' : '#000';
</script>

<div
	class="resume-profile-contact-container"
	style="{$lightMode
		? 'background-color: var( --lightModeSplashPrimary);'
		: 'background-color: var(--lightText);'}; height: {contactHeight}px"
>
	<div class="contact-info-container">
		<WebIcon fillColor={$lightMode ? '#FFFFFF' : '#000000'} height={35} width={35} />
		<h4 style={$lightMode ? 'color: var( --lightText);' : 'color: var(--darkText);'}>
			dompetriella.com
		</h4>
	</div>

	<div class="contact-info-container">
		<PhoneIcon fillColor={$lightMode ? '#FFFFFF' : '#000000'} height={35} width={35} />
		<h4 style={$lightMode ? 'color: var( --lightText);' : 'color: var(--darkText);'}>
			616-232-5044
		</h4>
	</div>

	<div class="contact-info-container">
		<MailIcon fillColor={$lightMode ? '#FFFFFF' : '#000000'} height={35} width={35} />
		<h4 style={$lightMode ? 'color: var( --lightText);' : 'color: var(--darkText);'}>@gmail.com</h4>
	</div>
</div>

<style>
	.contact-info-container {
		width: 310px;
		display: flex;
		justify-content: start;
		align-items: center;
	}

	h4 {
		text-align: center;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 2px;
		margin: 0px;
		padding-left: 30px;
		padding-top: 15px;
		padding-bottom: 15px;
	}

	.resume-profile-contact-container {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;
		width: 100%;
		border-radius: 5em;
	}
</style>
