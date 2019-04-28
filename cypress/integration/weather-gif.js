

context('Actions', () => {

  // before each test, visit this site:
  beforeEach(() => {
    cy.visit('https://weathergif.surge.sh')
  })

  it('selects an image type, clicks submit', () => {

    // Brooklyn
    cy.get('#zip')
      .type('11231').should('have.value', '11231')
    cy.get('#button').click()
    cy.wait(2000)

    // clear field
    cy.get('#zip')
      .type('{backspace}{backspace}{backspace}{backspace}{backspace}').should('have.value', '')
    cy.wait(1500)

    cy.get('#zip')
      .type('90210').should('have.value', '90210')
    cy.get('#button').click()
    cy.wait(2000)

    // clear field
    cy.get('#zip')
      .type('{backspace}{backspace}{backspace}{backspace}{backspace}').should('have.value', '')
    cy.wait(1500)

    cy.get('#zip')
      .type('68410').should('have.value', '68410')
    cy.get('#button').click()
    cy.wait(2000)


  })

})
