
context('Actions', () => {

  // before each test, visit this site:
  beforeEach(() => {
    cy.visit('https://so-trashy-react.surge.sh/')
  })

  it('selects year dropdown menu', () => {
    cy.get('select').select('2017')
    cy.get('select').select('2016')
    cy.get('select').select('2015')
    cy.get('select').select('2014')
    cy.get('select').select('2013')
    cy.get('select').select('2012')
    cy.get('select').select('2011')
    cy.get('select').select('2010')
  })

})
