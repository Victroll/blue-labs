<script lang="ts">
    export let onClose: () => void;
    export let title: string;
</script>

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
</style>

<div class="modal-background" on:click={onClose}>
    <!-- Avoid click propagation and closing the modal -->
    <section on:click={e => e.stopPropagation()}>
        <div class="modal-header">
            <h2 id="form-dialog-title">
                {title}
            </h2>
            <button on:click={e => {
                e.preventDefault()
                onClose()
            }}>
                <i class="fas fa-times"></i>
            </button>
        </div>
        <slot></slot>
    </section>
</div>