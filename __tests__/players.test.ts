import { post } from "../src/routes/players"

describe("the `players` endpoint", () => {
    it("exports a `post` function", () => {
        expect(post).toBeDefined()
    })

    // Add more tests here (e.g. 'returns 200 on success or 500 for invalid requests')
})
