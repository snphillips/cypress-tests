

context('Actions', () => {

  // before each test, visit this site:
  beforeEach(() => {
    cy.visit('https://art-thief.surge.sh/')
  })

    it('hovers over site elements', () => {
      cy.get('.header-link').trigger('mouseover').should(`exist`)
      cy.get('#placeholder-image').trigger('mouseover').should(`exist`)
      cy.get('.fa-github').trigger('mouseover').should(`exist`)
    })


    it('selects an image type, clicks submit', () => {
    cy.get('select').select('abstract')
    cy.get('#submit-button').click()
    cy.wait(2000)

    cy.get('select').select('angular')
    cy.get('#submit-button').click()
    cy.wait(2000)

    cy.get('select').select('graphic design')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('art deco')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('art nouveau')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('chairs')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('circular')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('geometric')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('graphic designers')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('industrial design')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('intricate')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('kitchen')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('modernism')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('posters')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('simple')
    cy.get('#submit-button').click()
    cy.wait(1500)

    cy.get('select').select('textile design')
    cy.get('#submit-button').click()
    cy.wait(1500)

  })



})
