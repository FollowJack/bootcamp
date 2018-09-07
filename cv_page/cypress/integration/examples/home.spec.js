/* global context cy, it, beforeEach */

context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })

  it('click on game of life', () => {
    cy.contains('Game of Life').click()
    cy.url().should('contain', 'game_of_life')
  })
})
