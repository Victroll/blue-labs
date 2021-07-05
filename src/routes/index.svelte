<script lang="ts">
    import { onMount } from "svelte"
    import type { Player } from "../interfaces"
    import MainContent from "../components/MainContent.svelte"

    let loading = true
    let players: Array<Player> = []

    onMount(() => {
        // TODO:
        // - Notify the user of any errors
        // - This part can also be (optionally) optimised to retrieve the players
        //   server-side and prerender the page
        fetch("/players")
            .then((response) => {
                if (response.ok) return response.json()
                else throw new Error("Could not retrieve players")
            })
            .then((data) => {
                players = data
                loading = false
            })
            .catch((error) => console.log(error))
    })

</script>

{#if loading}
    <h2>Loading...</h2>
{:else}
    <MainContent
        players={players}
    />
{/if}
