<script lang="ts">
    import Modal from './Modal.svelte';
    let user = "";
    let password = "";
    export let onClose: (token: string | null) => void;

    const login = () => {
        fetch("/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user, password })
        })
        .then(response => {
            if (response.ok) {
                alert("Logged in successful!");
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(token => onClose(token))
        .catch(error => {
            console.error(error);
            alert(`An error has occuried: ${error}`);
        });
    };
</script>

<style lang="scss">
    .bottom-section {
        padding-bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    input {
        width: 150px;
    }
    div {
        display: flex;
        width: 80%;
        margin-bottom: 0.5rem;
        label {
            width: 75px;
        }
    }
</style>

<Modal title="Log in" onClose={() => onClose(null)}>
    <div>
        <label for="user">User</label>
        <input
            required
            id="user"
            name="user"
            on:change={e => {
                user = e.target.value
            }}
        />
    </div>
    <div>
        <label for="password">Password</label>
        <input
            required
            id="password"
            name="password"
            type="password"
            on:change={e => {
                password = e.target.value
            }}
        />
    </div>
    <div class="bottom-section">
        <button on:click={login} disabled={!user || !password}>
            Log in
        </button>
    </div>
</Modal>