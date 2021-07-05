import { nanoid } from "nanoid"
import { getRandomArbitraryInt } from "../utils"
import type { Player, Position } from "../interfaces"

const positions: Array<Position> = [
    "Forward",
    "Forward",
    "Midfielder",
    "Goalkeeper",
    "Defender",
]

const names: Array<string> = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Andres Iniesta",
    "Iker Casillas",
    "Thiago Silva",
]

const list: Array<Player> = Array.from(Array(5)).map((_, i) => {
    return {
        id: nanoid(),
        position: positions[i],
        name: names[i],
        picture: `players/${i + 1}.jpeg`,
        score: getRandomArbitraryInt(1, 100),
        goals: 5 - i,
    }
})

export default list
