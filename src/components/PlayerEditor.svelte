<style lang="scss">
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
    import Modal from './Modal.svelte';
    import type { Player } from "../interfaces"
    import PlayerForm from "../components/PlayerForm.svelte"

    export let onClose: () => void
    export let submitPlayer: (p: Player) => Promise<any>
    export let player: Partial<Player>

    let editingPlayer: Player | undefined
</script>

<Modal onClose={onClose} title={player.name ? `Edit ${player.name}` : "New player"}>
    <PlayerForm
        id={player.id}
        name={player.name}
        position={player.position}
        picture={player.picture}
        score={player.score}
        goals={player.goals}
        onUpdate={data => editingPlayer = data}
    />

    <div class="bottom-section">
        <button on:click={() => {
            submitPlayer(editingPlayer);
            onClose();
        }}>
            <i class="fas fa-upload"></i>
        </button>
    </div>
</Modal>
