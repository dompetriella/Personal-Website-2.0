<script>
	import '../app.css';
	import { Theme } from '../models/theme';
	import { lightMode } from '../stores';

	$: bgColor = $lightMode ? Theme.lightModePrimary : Theme.darkText;
</script>

<div class="app">
	<main style={`background-color: ${bgColor}`}>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
	}

	main {
		width: 100%;
		height: 100%;
		min-height: 100vh;
	}
</style>
