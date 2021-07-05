<script lang="ts">
    import type { Player } from "../interfaces"
    import PlayerForm from "../components/PlayerForm.svelte"

    export let onClose: () => void
    export let submitPlayer: (p: Player) => Promise<any>
    export let player: Partial<Player>

    let editingPlayer: Player | undefined
</script>

<section>
    <h2 id="form-dialog-title">
        {player.name ? `Edit ${player.name}` : "New player"}
    </h2>
    <div>
        <PlayerForm
            id={player.id}
            name={player.name}
            position={player.position}
            picture={player.picture}
            score={player.score}
            onUpdate={data => editingPlayer = data}
        />
    </div>

    <div>
        <button on:click={() => {
            // TODO: implement the "Add player" functionality
            throw new Error("Missing implementation for Add player")
        }}>
            Submit
        </button>

        <button on:click={e => {
            e.preventDefault()
            onClose()
        }}>
            Close
        </button>
    </div>
</section>
