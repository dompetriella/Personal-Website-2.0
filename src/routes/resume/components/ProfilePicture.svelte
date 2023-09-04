<script lang="ts">
	export let size: number = 16;
	let paddingSize: number = size / 16;
</script>

<div class="resume-profile-picture-container" style="height: {size}em; width: {size}em;">
	<img
		class="profile-picture"
		style="padding-top: {paddingSize}em"
		src="/project-icons/dompetriella.png"
		alt={'my face .png'}
	/>
</div>

<style>
	.resume-profile-picture-container {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		border-radius: 50%;
		overflow: hidden;
	}

	.profile-picture {
		max-width: 98%;
		max-height: 98%;
		object-fit: contain;
	}

	/* desktop */
	@media screen and (min-width: 1024px) {
		.resume-profile-picture-container {
			position: absolute;
			z-index: 4;
			margin-top: -5em;
		}
	}
</style>
