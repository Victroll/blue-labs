<script lang="ts">
    import type { Player } from "../interfaces";

    export let player: Player;
    export let index: number;
    export let last: boolean;
    export let next: () => void;
    export let prev: () => void;
    export let deletePlayer: (id: string) => void;
</script>

<style lang="scss">
    $desktop-min-width: 376px;
    section {
        position: relative;
        /* 100vh - nav height */
        height: calc(100vh - 2rem - 40px);
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-between;
    }
    .img-section {
        display: flex;
        justify-content: center;
        flex-flow: column;
        p {
            color: white;
            font-size: x-large;
            font-weight: bold;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        }
        img {
            max-height: 50vh;
            max-width: 100vw;
        }
    }

    .data-section {
        display: flex;
        justify-content: space-around;
        width: 325px;
        margin: 1rem 0;
        background-color: rgba(54, 51, 66, 0.95);
        border-radius: 8px;
        border-color: rgba(146, 143, 160, 0.95);
        border-width: 1px;
        border-style: solid;
        div {
            width: 80px;
            height: 80px;
            background-color: rgba(48, 37, 95, 0.95);
            border-radius: 50%;
            border-color: rgba(146, 143, 160, 0.95);
            border-width: 1px;
            border-style: solid;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: center;
            p {
                color: white;
                margin: 5px;
            }
            p:first-child {
                font-size: small;
            }
            p:last-child {
                font-size: large;
                font-weight: bold;
            }
        }
        div:first-child {
            background: none;
            border: none;
        }
    }

    .button-section {
        width: 325px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 1rem;
        button {
            height: 36px;
            background-color: transparent;
            border: none;
            color: white;
            font-size: x-large;
            &.level {
                @media screen and (min-width: $desktop-min-width) {
                    display: none;
                }
            }
        }
    }
</style>

<section>
    <div class="img-section">
        <p>{player.name}</p>
        <img
            src={player.picture}
            alt={`of ${player.name}`}
            title="Image title"
        />
    </div>
    <div class="data-section">
        <div>
            <p>Position</p>
            <p>{player.position}</p>
        </div>
        <div>
            <p>Score</p>
            <p>{player.score}</p>
        </div>
        <div>
            <p>Goals</p>
            <p>{player.goals}</p>
        </div>
    </div>
    <div class="button-section">
        <button on:click={() => deletePlayer(player.id)}><i class="fas fa-trash"></i></button>
        {#if index > 0}
            <button on:click={prev} class="level"><i class="fas fa-level-up-alt"></i></button>
        {/if}
        {#if !last}
            <button on:click={next} class="level"><i class="fas fa-level-down-alt"></i></button>
        {/if}
        <button><i class="fas fa-edit"></i></button>
    </div>
</section>