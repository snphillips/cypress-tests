
context('Actions', () => {

  // before each test, visit this site:
  beforeEach(() => {
    cy.visit('https://art-thief.surge.sh/')
  })

  it('selects all the year dropdown menu', () => {
    cy.get('select').select('abstract')
    cy.get('select').select('angular')
    cy.get('select').select('graphic design')
    cy.get('select').select('art deco')
    cy.get('select').select('art nouveau')
    cy.get('select').select('chairs')
    cy.get('select').select('circular')
    cy.get('select').select('geometric')
  })



})
