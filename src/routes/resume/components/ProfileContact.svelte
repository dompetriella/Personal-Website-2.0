<script lang="ts">
	import { Theme } from '../../../models/theme';
	import { lightMode } from '../../../stores';
	import type { ContactInfo } from '../models/ContactInfo';
	import MailIcon from './icons/mail-icon.svelte';
	import PhoneIcon from './icons/phone-icon.svelte';
	import WebIcon from './icons/web-icon.svelte';
	export let contactHeight: number;
	export let contactInfo: ContactInfo;
	export let isMobile: boolean;

	$: fillColor = $lightMode ? '#FFF' : '#000';
	$: textColor = $lightMode ? Theme.darkText : Theme
	let height = isMobile ? '' : 'height: ' + contactHeight + 'px;';

</script>

<div
	class="resume-profile-contact-container"
	style="{$lightMode
		? `background-color: ${Theme.lightModeSplashPrimary}`
		: `background-color: ${Theme.lightText}`}; {height}"
>
	{#if isMobile}
		<h1 class="title" style={`color: ${Theme.darkText};`}>CONTACT</h1>
	{/if}
	<div class="tile-padding">
		<div class="contact-info-container">
			<WebIcon {fillColor} height={35} width={35} />
			<h4 style={`color: ${Theme.darkText};`}>
				{contactInfo.websiteUrl}
			</h4>
		</div>

		<div class="contact-info-container">
			<PhoneIcon {fillColor} height={35} width={35} />
			<h4 style="color: {Theme.darkText}">
				{contactInfo.phoneNumber}
			</h4>
		</div>

		<div class="contact-info-container">
			<MailIcon {fillColor} height={35} width={35} />
			<div class="email-column">
				<h4
					style="color: {Theme.darkText}; padding-bottom: 0px; padding-top: 5px;"
				>
					{contactInfo.emailAddress}
				</h4>
				<h4
					style="color: {Theme.darkText}; padding-top: 0px; transform: translateX(30px)"
				>
					@{contactInfo.emailAddressDomain}
				</h4>
			</div>
		</div>
	</div>
</div>

<style>
	.contact-info-container {
		width: 300px;
		display: flex;
		justify-content: start;
		align-items: center;
	}

	h1 {
		letter-spacing: 4px;
	}

	h4 {
		text-align: center;
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 2px;
		margin: 0px;
		padding-left: 35px;
		padding-top: 12px;
		padding-bottom: 12px;
	}

	.resume-profile-contact-container {
		margin-top: -2em;
		padding-top: 3em;
		padding-bottom: 3em;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		border-radius: 0em 0em 2em 2em;
	}

	.tile-padding {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	@media screen and (min-width: 1024px) {
		.tile-padding {
			display: flex;
			flex-direction: column;
			padding-bottom: 25px;
		}

		.resume-profile-contact-container {
			margin: 0px;
			padding: 0px;
			position: absolute;
			display: flex;
			flex-direction: column;
			justify-content: end;
			align-items: center;
			width: 100%;
			border-radius: 5em;
		}
	}
</style>
