<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import ModelCard from "../lib/ModelCard.svelte";
	import {modelsaber_api} from "./sabers/_api";
</script>

<svelte:head>
	<title>Testing</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="grid-layout">
		<ModelCard></ModelCard>
		<ModelCard></ModelCard>
		<ModelCard></ModelCard>
		<ModelCard></ModelCard>
		<ModelCard></ModelCard>
		<ModelCard></ModelCard>
		<ModelCard></ModelCard>
		<ModelCard></ModelCard>

	</div>
</section>

<style>

	.grid-layout {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}


</style>
