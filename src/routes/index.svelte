<script lang="ts">
    import "@fortawesome/fontawesome-free/js/all.min"

    import { onMount } from "svelte"
    import type { Player } from "../interfaces"
    import MainContent from "../components/MainContent.svelte"

    let loading = true
    let players: Array<Player> = []

    onMount(() => {
        // TODO:
        // - This part can also be (optionally) optimised to retrieve the players
        //   server-side and prerender the page
        fetch("/players")
            .then((response) => {
                if (response.ok) return response.json()
                else {
                    alert('An error has occuried.');
                    throw new Error("Could not retrieve players");
                }
            })
            .then((data) => {
                players = data
                loading = false
            })
            .catch((error) => {
                alert('An error has occuried.');
                console.error(error);
            })
    })

</script>

{#if loading}
    <h2>Loading...</h2>
{:else}
    <MainContent
        players={players}
    />
{/if}
