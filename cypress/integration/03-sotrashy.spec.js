
context('Actions', () => {

  // before each test, visit this site:
  beforeEach(() => {
    cy.visit('https://so-trashy-react.surge.sh/')
  })

  it('selects all the year dropdown menu', () => {
    cy.get('select').select('2017')
    cy.get('select').select('2016')
    cy.get('select').select('2015')
    cy.get('select').select('2014')
    cy.get('select').select('2013')
    cy.get('select').select('2012')
    cy.get('select').select('2011')
    cy.get('select').select('2010')
  })

  it('clicks all the refuse type radio buttons', () => {
    cy.get('#allcollected').click({force: true})
    cy.get('#refusetonscollected').click({force: true})
    cy.get('#papertonscollected').click({force: true})
    cy.get('#mgptonscollected').click({force: true})
    cy.get('#resorganicstons').click({force: true})
    cy.get('#leavesorganictons').click({force: true})
    cy.get('#xmastreetons').click({force: true})
  })

  it('clicks all the sorting buttons', () => {
    cy.get('#sort-ascending').click({force: true})
    cy.get('#sort-descending').click({force: true})
    cy.get('#sort-alphabetical').click({force: true})
  })


})
