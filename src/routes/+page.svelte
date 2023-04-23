<script lang="ts">
	import Contact from '../components/contact/Contact.svelte';
	import Projects from '../components/projects/Projects.svelte';
	import Header from '../components/header/Header.svelte';

	let screenSize: number;
	const mobile: number = 480;
	export const prerender = true;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="main-tree">
	<Header />
	<Projects />
	<Contact />
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
