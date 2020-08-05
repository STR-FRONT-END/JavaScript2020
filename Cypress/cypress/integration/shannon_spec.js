describe("Name of Test", function() {
    it("This is what this test does", function() {
        expect(true).to.equal(true)
    })
})



describe("Name of Test2", function() {
    it("Visit the kitchen sink", function() {
        cy.visit('https://example.cypress.io')
        
    })


    it("Clicks an element", function() {
        cy.visit('https://example.cypress.io')
        cy.contains( 'type').click()//element that contains the string type
    })
    it("Make an assertion", function() {
        cy.visit('https://example.cypress.io')
        cy.contains( 'type').click()
        cy.url()
        .should('include', '/commands/actions')// includes in the url
    })
    it("Gets, types and asserts", function() {
        cy.visit('https://example.cypress.io')
        cy.contains( 'type').click()
        cy.url()
        .should('include', '/commands/actions')
        cy.get('.action-email')//get class name
            .type('fake@email.com')//types text into the input
            .should('have.value', 'fake@email.com')// input value reflects the text typed 
    })
})


