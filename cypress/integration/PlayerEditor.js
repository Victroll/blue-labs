describe("PlayerEditor component", () => {
    it("should be visible when adding a new player", () => {
        cy.visit("/")
        cy.get("#add-player").click()
        cy.get("#form-dialog-title").should("be.visible")
    })
})
