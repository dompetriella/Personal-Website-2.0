<script lang="ts">
	import Contact from '../components/contact/Contact.svelte';
	import Projects from '../components/projects/Projects.svelte';
	import Header from '../components/header/Header.svelte';
	import { onMount } from 'svelte';
	import { setToDarkMode, setToLightMode } from '../stores';
	import Navbar from '../components/navbar.svelte';

	let screenSize: number;

	let mounted = false;
	onMount(async () => {
		mounted = true;
	});
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="main-tree">
	{#if mounted}
		<Navbar />
		<Header />
		<Projects />
		<Contact />
	{/if}
</div>

<style>
	.main-tree {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
	}

	/* desktop */
	@media (min-width: 480px) {
		.main-tree {
			align-items: start;
		}
	}
</style>
