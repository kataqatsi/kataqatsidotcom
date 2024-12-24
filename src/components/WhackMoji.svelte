<script>
	import { onMount } from 'svelte';
	import { Rive } from '@rive-app/canvas';

	let canvas;
	let rive;

	onMount(async () => {
		rive = new Rive({
			src: '/whack_moji.riv', // Make sure to adjust this path to where your .riv file is stored
			canvas: canvas,
			autoplay: true,
			stateMachines: 'State Machine 1' // Adjust this to match your state machine name
		});

		return () => {
			if (rive) {
				rive.cleanup();
			}
		};
	});
</script>

<canvas bind:this={canvas} width="400" height="400" />

<style>
	canvas {
		width: 400px;
		height: 400px;
	}
</style>
