export interface BasePlayer {
    position: Position
    name: string
    picture: string
    score: number
    goals: number
}

export interface Player extends BasePlayer {
    id: string
}

export type Position = "Forward" | "Midfielder" | "Defender" | "Goalkeeper"
