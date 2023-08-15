<script lang="ts">
	import { lightMode } from '../../../stores';

	export let contactHeight: number;
</script>

<div
	class="resume-profile-contact-container"
	style="{$lightMode
		? 'background-color: var( --lightModeSplashPrimary);'
		: 'background-color: var(--lightText);'}; height: {contactHeight}px"
/>

<style>
	.resume-profile-contact-container {
		position: absolute;
		width: 100%;
		border-radius: 5em;
	}
</style>
