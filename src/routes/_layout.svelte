<script lang="ts">
	import Nav from '../components/Nav.svelte'
</script>

<style lang="scss">

	$desktop-min-width: 376px;
	main {
		position: relative;
		max-width: 56rem;
		background-color: rgb(29, 40, 57);
		margin: 0;
		box-sizing: border-box;
		height: 100vh;
    	overflow-y: scroll;
		margin-top: calc(2rem + 40px);
	}

	@media screen and (min-width: $desktop-min-width) {
		main {
			margin: 2rem 10rem;
			padding: 2rem;
		}
	}
</style>

<svelte:head>
    <title>Player list UI</title>
</svelte:head>

<Nav />

<main>
	<slot></slot>
</main>
