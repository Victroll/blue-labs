<style lang="scss">
    $desktop-min-width: 376px;
    .modal-background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 50;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        section {
            display: flex;
            flex-flow: column;
            align-items: center;
            width: 100%;
            background-color: white;
            border-radius: 12px;
            @media screen and (min-width: $desktop-min-width) {
                max-width: 500px;
            }
        }
    }

    .modal-header {
        padding: 0.5rem 0;
        margin: 0 0.5rem;
        width: 95%;
        display: flex;
        justify-content: space-between;
        button {
            background-color: transparent;
            border: none;
            font-size: x-large;
        }
    }
    
    .bottom-section {
        padding-bottom: 1rem;
        button {
            background-color: transparent;
            border: none;
            font-size: x-large;
        }
    }

    button {
        cursor: pointer;
    }
</style>

<script lang="ts">
    import type { Player } from "../interfaces"
    import PlayerForm from "../components/PlayerForm.svelte"

    export let onClose: () => void
    export let submitPlayer: (p: Player) => Promise<any>
    export let player: Partial<Player>

    let editingPlayer: Player | undefined
</script>

<div class="modal-background" on:click={onClose}>
    <!-- Avoid click propagation and closing the modal -->
    <section on:click={e => e.stopPropagation()}>
        <div class="modal-header">
            <h2 id="form-dialog-title">
                {player.name ? `Edit ${player.name}` : "New player"}
            </h2>
            <button on:click={e => {
                e.preventDefault()
                onClose()
            }}>
                <i class="fas fa-times"></i>
            </button>
        </div>
        <PlayerForm
            id={player.id}
            name={player.name}
            position={player.position}
            picture={player.picture}
            score={player.score}
            onUpdate={data => editingPlayer = data}
        />

        <div class="bottom-section">
            <button on:click={() => {
                // TODO: implement the "Add player" functionality
                throw new Error("Missing implementation for Add player")
            }}>
                <i class="fas fa-upload"></i>
            </button>
        </div>
    </section>
</div>
