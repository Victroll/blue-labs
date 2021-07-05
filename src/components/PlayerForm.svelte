<script lang="ts">
    import type { Player, Position } from "../interfaces"
    import { toPosition, readFileAsBase64 } from "../utils"

    export let id: string
    export let name: string = ""
    export let position: Position = "Goalkeeper"
    export let picture: string = ""
    export let score: number = 0
    export let goals: number = 0
    export let onUpdate: (player: Player) => void
    let error: string | undefined
    $: data = {
        id,
        name,
        position,
        picture,
        score,
        goals,
    }

</script>

<label for="name">Name</label>
<input
    required
    id="name"
    name="name"
    on:change={e => {
        name = e.target.value
        onUpdate({ ...data, name })
    }}
    value={data.name}
/>
<select
    bind:value={position}
    on:change={e => {
                    const nextPosition = toPosition(e.target.value)
                    if (nextPosition) {
                        position = nextPosition
                        onUpdate({ ...data, position })
                    }
                }}
    name="position"
    id="position"
>
    <option value="Goalkeeper">Goalkeeper</option>
    <option value="Defender">Defender</option>
    <option value="Midfielder">Midfielder</option>
    <option value="Forward">Forward</option>
</select>

<label for="score">Score</label>
<input
    type="number"
    min=0
    max=100
    required
    id="score"
    name="score"
    on:change={e => {
                    const nextScore = parseInt(e.target.value, 10)
                    if (!isNaN(nextScore)) {
                        score = nextScore
                        onUpdate({ ...data, score })
                    }
                }}
    value={data.score || 0}
/>

<label for="goals">Goals</label>
<input
    type="number"
    min=0
    max=100
    required
    id="goals"
    name="goals"
    on:change={e => {
                    const nextGoals = parseInt(e.target.value, 10)
                    if (!isNaN(nextGoals)) {
                        goals = nextGoals
                        onUpdate({ ...data, goals })
                    }
                }}
    value={data.goals || 0}
/>
<div class="file_input">
    {#if data.picture}
        <img src={data.picture} alt="Player's preview" />
        <h2>Change picture (best 400x400)</h2>
    {:else}
        <h2>Pick a picture (best 400x400)</h2>
    {/if}
    {#if error}
        <p class="error">{error}</p>
    {/if}
    <input
        type="file"
        accept="image/png, image/jpeg"
        on:change={e => {
                        const file = e.currentTarget.files
                            ? e.currentTarget.files[0]
                            : null
                        if (file) {
                            readFileAsBase64(file).then(base64 => {
                                if (base64.length > 1048487) {
                                    error = "Image too large"
                                } else {
                                    picture = base64
                                    onUpdate({ ...data, picture })
                                }
                            })
                        }
                    }}
    />
</div>
