import type { Request, Response } from "express"
import type { Player } from "../../interfaces"
import playerList from "../../data/players"

let players: Array<Player> = playerList

/**
 * GET verb for /players
 */
export async function get(req: Request, res: Response): Promise<void> {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(players))
}

/**
 * POST verb for /players
 * requires Player
 */
export async function post(req: Request, res: Response): Promise<void> {
    try {
        const { id, position, name, picture, score, goals } = req.body
        players.push({ id, position, name, picture, score, goals })
        res.end()
    } catch (e) {
        res.writeHead(500, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Something went wrong" }))
    }
}

/**
 * PUT verb for /players
 * requires Player
 */
export async function put(req: Request, res: Response): Promise<void> {
    try {
        const { id, position, name, picture, score, goals } = req.body
        const idx = players.findIndex((player: Player) => player.id === id)
        players[idx] = { id, position, name, picture, score, goals }
        res.end()
    } catch (e) {
        res.writeHead(500, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Something went wrong" }))
    }
}

/**
 * DELETE verb for /players
 * requires player id
 */
export async function del(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.body
        const idx = players.findIndex((player: Player) => player.id === id)
        players.splice(idx, 1)
        res.end()
    } catch (e) {
        res.writeHead(500, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Something went wrong" }))
    }
}
