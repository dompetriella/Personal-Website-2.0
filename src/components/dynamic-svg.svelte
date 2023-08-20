<script lang="ts">
	export let svgPath: string;
	export let fillColor = '#000000'; // Default fill color
	export let height: number = 100;
	export let width: number = 100;
</script>

<div>
	<svg style="height: {height}px; width: {width}px;" viewBox="0 0 24 24">
		<use href={svgPath} style="fill: {fillColor}" />
	</svg>
</div>

<style>
</style>
