<script lang="ts">
	import { lightMode } from '../../stores';
	import SplashBackgroundContactMobile from './splash-background-contact-mobile.svelte';
	import ContactDesktop from './contact-desktop.svelte';

	let screenSize: number;
	const mobile: number = 480;

	$: fontSize = screenSize > mobile ? 5 : 2.7;
	$: textColor = $lightMode ? 'var(--darkText)' : 'var(--lightText)';
	$: animationType = $lightMode ? 'light-text-animation' : 'dark-text-animation';
</script>

<svelte:window bind:innerWidth={screenSize} />

<section id="contact" class="contact-area">
	{#if screenSize > mobile}
		<ContactDesktop />
	{/if}
	{#if screenSize < mobile}
		<SplashBackgroundContactMobile />
	{/if}
</section>

<style>
	.contact-area {
		width: 100%;
	}
</style>
