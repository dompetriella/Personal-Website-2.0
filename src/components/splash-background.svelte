<script></script>

<div class="splash-body">
	<div class="primary-splash" />
	<div class="secondary-splash" />
	<div class="tertiary-splash" />
</div>

<style>
	.splash-body {
		position: relative;
	}

	.primary-splash {
		position: absolute;
		height: 7em;
		width: 7em;
		left: 1em;
		top: 1em;
		border-radius: 50%;
		background-color: white;
		z-index: 3;
	}

	.secondary-splash {
		position: absolute; /* Add position absolute */
		height: 8.5em;
		width: 8.5em;
		left: 0.5em;
		top: 0.5em;
		border-radius: 50%;
		background-color: grey;
		z-index: 2;
	}

	.tertiary-splash {
		position: absolute; /* Add position absolute */
		height: 10em;
		width: 10em;
		border-radius: 50%;
		background-color: black;
		z-index: 1;
	}
</style>
