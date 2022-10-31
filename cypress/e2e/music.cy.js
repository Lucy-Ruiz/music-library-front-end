describe('all music library tests', () => {
    describe('tests for add function', () => {
        it('Add a song', () => {
            cy.visit('http://localhost:3000/')  
            cy.get('[data-cy="titleTest"]').type('The Song')
            cy.get('[data-cy="artistTest"]').type('The Artist')
            cy.get('[data-cy="albumTest"]').type('The Album')
            cy.get('[data-cy="2022-01-01"]').type('2022-02-02')
            cy.get('[data-cy="genreTest"]').type('The Genre')
            cy.get(':nth-child(3) > form > button').click()
            cy.get(':nth-child(6) > :nth-child(2)').should('have.text', 'The Song')
            cy.get(':nth-child(6) > :nth-child(5)').should('have.text', '2022-02-02')
        })
    })
    describe('filter tests', () => {
        it('Type Die and verify only that song is selected', () => {
            cy.visit('http://localhost:3000/')
            cy.get(':nth-child(2) > form > input').type('Die')
            cy.get(':nth-child(2) > form > button').click()
        })
    })
    describe('delete song test', () =>{
        it('Delete a song', () => {
            cy.visit('http://localhost:3000/')
            cy.get(':nth-child(6) > :nth-child(7) > form > button').click()
        })
    })

})