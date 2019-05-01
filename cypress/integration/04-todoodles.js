
context('Actions', () => {

  // before each test, visit this site:
  beforeEach(() => {
    cy.visit('https://todoodles.surge.sh/')
  })

  it('Adds an item to the todo list', () => {

    cy.get('.input-field')
      .type('feed Bobo').should('have.value', 'feed Bobo')
      .type('{enter}').should('have.value', '')
  })



})
