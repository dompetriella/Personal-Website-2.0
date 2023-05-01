<script lang="ts">
	import { lightMode } from '../../stores';
	import ActionButton from '../action-button.svelte';
	import emailjs from '@emailjs/browser';

	import { onMount } from 'svelte';
	import { initEmailJS } from '../../emailjs';

	const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
	const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
	const captchaKey = import.meta.env.VITE_CAPTCHA_KEY;

	export let width: number;

	onMount(() => {
		initEmailJS(publicKey);
	});

	function onReCaptchaSubmit(token: string) {
		if (!token) {
			alert('Captcha failed, please refresh the page');
		}
	}

	async function handleSubmit(event: Event) {
		// prevent form submission
		event.preventDefault();

		grecaptcha.execute();
		// get the form data
		const form = event.target as HTMLFormElement;
		const formData = {
			sender_name: form.sender_name.value,
			sender_email_address: form.sender_email_address.value,
			sender_message: form.sender_message.value,
			token: ''
		};

		try {
			await emailjs.send(serviceId, templateId, formData, publicKey);

			alert('Email sent successfully!');
			form.reset();
		} catch (error) {
			// show error message
			console.error(error);
			alert('Error sending email!');
		}
	}

	let nameSelected: boolean = false;
	let emailSelected: boolean = false;
	let messageSelected: boolean = false;

	$: textColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkModeSplashPrimary)';
	$: contactBoxColor = $lightMode ? 'var(--lightModeSecondary)' : 'var(--darkModeSecondary)';
	$: contactBoxShadowColor = $lightMode ? 'var(--darkGreenText)' : 'var(--darkText)';

	$: inputBoxColor = $lightMode
		? 'var(--lightModeSplashSecondary)'
		: 'var(--darkModeSplashPrimary)';
	$: inputShadowColor = $lightMode
		? 'var(--lightModeSplashSecondary)'
		: 'var(--darkModeSplashPrimary)';

	$: selectedInputColor = $lightMode
		? 'var(--lightModeSplashPrimary)'
		: 'var(--darkModeSplashSecondary)';
</script>

<form
	on:submit|preventDefault={handleSubmit}
	id="contact-form"
	style="background-color: {contactBoxColor}; box-shadow: -5px 5px 0px 3px {contactBoxShadowColor}; width: {width}em"
	class="contact-form-area"
>
	<div>
		<div style="font-size: 1.5em; color: {textColor}; padding: 0.4em 0">NAME</div>
		<div
			style="width: {width * 0.85}em; background-color: {nameSelected
				? selectedInputColor
				: inputShadowColor}"
			class="input-container"
		>
			<input
				on:focus={() => (nameSelected = true)}
				on:focusout={() => (nameSelected = false)}
				aria-label="Name Input"
				name="sender_name"
				style="background-color: {inputBoxColor};"
				class="single-input"
			/>
		</div>
	</div>

	<div>
		<div style="font-size: 1.5em; color: {textColor}; padding: 0.4em 0">EMAIL</div>
		<div
			style="width: {width * 0.85}em; background-color: {emailSelected
				? selectedInputColor
				: inputShadowColor}"
			class="input-container"
		>
			<input
				on:focus={() => (emailSelected = true)}
				on:focusout={() => (emailSelected = false)}
				aria-label="Email Address Input"
				name="sender_email_address"
				style="background-color: {inputBoxColor}"
				class="single-input"
			/>
		</div>
	</div>

	<div>
		<div style="font-size: 1.5em; color: {textColor}; padding: 0.4em 0">MESSAGE</div>
		<div
			style="width: {width * 0.85}em; background-color: {messageSelected
				? selectedInputColor
				: inputShadowColor}"
			class="input-container"
		>
			<textarea
				on:focus={() => (messageSelected = true)}
				on:focusout={() => (messageSelected = false)}
				aria-label="Message Input"
				name="sender_message"
				style="background-color: {inputBoxColor}; height: 18em"
				class="multiline-input"
			/>
		</div>
	</div>

	<div style="padding: 1em">
		<div
			class="g-recaptcha"
			data-sitekey={captchaKey}
			data-callback="onReCaptchaSubmit"
			data-size="invisible"
		/>

		<ActionButton isSubmitButton={true} text="SEND" />
	</div>
</form>

<style>
	.contact-form-area {
		border-radius: 1em;
		margin-bottom: 1.5em;
		display: flex;
		padding: 1em 0;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}

	.input-container {
		padding: 0.25em;
		border-radius: 0.5em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.single-input {
		height: 2em;
		padding: 0.5em;
		padding-left: 1em;
		border-radius: 0.5em;
		width: 90%;
		border: none;
		font-weight: bold;
		letter-spacing: 2px;
	}

	textarea:focus,
	input:focus {
		outline: none;
		border: none;
	}

	.multiline-input {
		padding: 0.5em;
		border-radius: 0.5em;
		width: 90%;
		border: none;
		font-weight: bold;
		letter-spacing: 2px;
	}
</style>
