import type { Request, Response } from "express";
import jwt from 'jwt-simple';

export async function post(req: Request, res: Response): Promise<void> {
    try {
        const { user, password } = req.body;
        // The password should be encrypted with some kind of salt and checked against the database
        // Since this is a challenge, lets assume that all of that is done :)
        if (user === "blue" && password === "labs") {
            // Generate a token for the user. It expires in 7 days
            const payload = {
                sub: user,
                iat: Math.floor(new Date().getTime() / 1000),
                exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 * 1000
            };
            const token = jwt.encode(payload, "blue-labs");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ token }));
        } else {
            res.writeHead(401, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "User and/or password not allowed" }));
        }
    } catch(e) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Something went wrong" }));
    }
}