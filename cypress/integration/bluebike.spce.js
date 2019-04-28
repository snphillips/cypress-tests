
// not working
// should better organize button & class ids on site for easier testing
context('Actions', () => {

  // before each test, visit this site:
  beforeEach(() => {
    cy.visit('https://aboutabluebike.surge.sh/')
  })


  it('clicks continue to lookup button', () => {
    cy.get('continue to bike lookup tool').click({force: true})
  })




})
