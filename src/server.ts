import sirv from "sirv"
import express from "express"
import compression from "compression"
import * as sapper from "@sapper/server"
import { json } from "body-parser"

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === "development"

/**
 * App server
 * */
express()
    .use(
        json(),
        compression({ threshold: 0 }),
        sirv("static", { dev }),
        sapper.middleware(),
    )
    .listen(PORT, () => {
        console.log(`HTTP Server running on http://localhost:${PORT}`)
    })
