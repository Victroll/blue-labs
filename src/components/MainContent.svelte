<script lang="ts">
    import { nanoid } from "nanoid"
    import type { Player } from "../interfaces"
    import { toPosition } from "../utils"
    import PlayerEditor from "../components/PlayerEditor.svelte"
    import PlayerMain from "./PlayerMain.svelte";

    export let players: Array<Player> = []
    let selectedPlayer: Player | undefined
    let isEditing = false

    const deletePlayer = (id: string) => {
        fetch("/players", {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id})})
            .then(response => {
                console.log('response: ', response);
                if (!response.ok) {
                    alert('An error has occuried.');
                    throw new Error(response.statusText);
                }
            })
            // Retrieve the players again
            .then(() => fetch("/players"))
            .then((response) => {
                if (response.ok) return response.json()
                else throw new Error("Could not retrieve players")
            })
            .then((data) => {
                console.log('data: ', data);
                players = data;
                // I know, not the best, a toast would be much better but... time :(
                alert('Success removing the player!');
            })
            .catch(error => {
                console.error(error);
                alert('An error has occuried.');
            });
    }

    const updatePlayer = (player: Player) => {
        // TODO: add `PUT` api request (endpoint: `/players`, accepted payload: player)
        throw new Error("Put request not implemented")
    }

    const addPlayer = (player: Player) => {
        // TODO: add `POST` api request (endpoint: `/players`, accepted payload: player)
        throw new Error("Post request not implemented")
    }

    const getDefaultPlayer = () => {
        return {
            id: nanoid(),
            position: toPosition("Goalkeeper"),
            score: 0,
            goals: 0,
        }
    }

    const scrollToPrev = (currentIndex: number) => {
        document.getElementById(players[currentIndex - 1].id).scrollIntoView();
        // Correct the scroll with the nav height
        scroll(0, -72);
    }

    const scrollToNext = (currentIndex: number) => {
        document.getElementById(players[currentIndex + 1].id).scrollIntoView();
        // Correct the scroll with the nav height
        scroll(0, -72);
    }
</script>

<style lang="scss">
    $desktop-min-width: 376px;
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    #add-player {
        position: fixed;
        z-index: 11;
        top: 1rem;
        right: 0;
        height: 36px;
        background-color: transparent;
        border: none;
        color: white;
        font-size: x-large;
        cursor: pointer;
        span {
            display: none;
        }
        @media screen and (min-width: $desktop-min-width) {
            font-size: xx-large;
            top: 50vh;
            right: 5vw;
            span {
                display: inline-block;
            }
        }
    }
</style>

<div>
    <ul>
        {#each players as player, index (player.id)}
            <li id={player.id}>
                <PlayerMain
                    player={player}
                    index={index} last={index === players.length - 1}
                    next={() => scrollToNext(index)}
                    prev={() => scrollToPrev(index)}
                    deletePlayer={deletePlayer}
                />
            </li>
        {/each}
    </ul>
    <button id="add-player" on:click={() => isEditing = !isEditing}>
        <i class="fas fa-plus"></i>
        <span>Add a new player</span>
    </button>
</div>

{#if isEditing || !!selectedPlayer}
    <PlayerEditor onClose={() => {
                        isEditing = false
                        selectedPlayer = undefined
                    }}
                  submitPlayer={player => {
                                    if (selectedPlayer) {
                                        return updatePlayer(player)
                                    } else {
                                        return addPlayer(player)
                                    }
                                }}
                  player={selectedPlayer || getDefaultPlayer()}
    />
{/if}
