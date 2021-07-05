<script lang="ts">
	import Nav from '../components/Nav.svelte'
</script>

<style>
	main {
		position: relative;
		max-width: 56rem;
		background-color: white;
		padding: 2rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<svelte:head>
    <title>Player list UI</title>
</svelte:head>

<Nav />

<main>
	<slot></slot>
</main>
