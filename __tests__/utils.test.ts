import { toPosition } from "../src/utils"

// TODO (testing)
// Only add tests here if additional methods were added to utils

describe("toPosition method", () => {
    test("returns the position if valid", () => {
        expect(toPosition("Forward")).toBe("Forward")
    })
})
