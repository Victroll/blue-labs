<script lang="ts">
    import { nanoid } from "nanoid"
    import type { Player } from "../interfaces"
    import { toPosition } from "../utils"
    import PlayerEditor from "../components/PlayerEditor.svelte"
    import LoginForm from '../components/LoginForm.svelte';
    import PlayerMain from "./PlayerMain.svelte";

    export let players: Array<Player> = []
    let selectedPlayer: Player | undefined
    let isEditing = false
    let showLogin = false;
    let userToken = null; // Auth token

    const retrievePlayers = (): Promise<void> => {
        return fetch("/players")
            .then((response) => {
                if (response.ok) return response.json()
                else throw new Error("Could not retrieve players")
            })
            .then((data) => {
                players = data;
                // I know, not the best, a toast would be much better but... time :(
                alert('Success!');
            })
    };

    const deletePlayer = (id: string) => {
        if (userToken) {
            fetch("/players", {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })})
                .then(response => {
                    if (!response.ok) {
                        alert('An error has occuried.');
                        throw new Error(response.statusText);
                    }
                })
                // Retrieve the players again
                .then(() => retrievePlayers())
                .catch(error => {
                    console.error(error);
                    alert('An error has occuried.');
                });
        } else {
            alert("Login to delete a player!");
        }
    }

    const updatePlayer = (player: Player) => {
        if (userToken) {
            return fetch('/players', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ player })
            })
            // Retrieve the players again
            .then(() => retrievePlayers())
            .catch(error => {
                console.error(error);
                alert('An error has occuried.');
            });
        } else {
            alert("Login to delete a player!");
        }
    }

    const addPlayer = (player: Player) => {
        if (userToken) {
            return fetch('/players', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ player })
            })
            // Retrieve the players again
            .then(() => retrievePlayers())
            .catch(error => {
                console.error(error);
                alert('An error has occuried.');
            });
        } else {
            alert("Login to delete a player!");
        }
    }

    const logout = () => {
        userToken = null;
        alert("Logged out");
    }

    const getDefaultPlayer = () => {
        return {
            id: nanoid(),
            position: toPosition("Goalkeeper"),
            score: 0,
            goals: 0,
        }
    }

    const onCloseLogin = (token: string | null) => {
        userToken = token;
        showLogin = false;
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

    button {
        position: fixed;
        z-index: 11;
        top: 1rem;
        right: 1rem;
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

    #log {
        right: 5rem;
        @media screen and (min-width: $desktop-min-width) {
            top: calc(50vh + 4rem);
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
                    editPlayer={() => selectedPlayer = player}
                />
            </li>
        {/each}
    </ul>
    {#if !userToken}
        <button id="log" on:click={() => showLogin = true}>
            <i class="fas fa-user"></i>
            <span>Log in</span>
        </button>
    {:else}
        <button id="log" on:click={logout}>
            <i class="fas fa-user-times"></i>
            <span>Log out</span>
        </button>
    {/if}
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

{#if showLogin}
    <LoginForm onClose={onCloseLogin} /> 
{/if}
