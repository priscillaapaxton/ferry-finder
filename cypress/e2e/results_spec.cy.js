describe('results spec', () => {
  beforeEach(() => {
    cy.intercept('https://www.bcferriesapi.ca/api/', {
      statusCode: 200,
      fixture: 'data'
    })
    cy.visit('http://localhost:3000/')
  })

  it('should show possible schedule options to the user on click without allowing user to click when an empty option is selected', () => {
    cy.get('.select')
    .select('empty')
    .get('.submit-button')
    .should('be.disabled')
    .get('select')
    .select('Bowen Island')
    .get('.submit-button-click')
    .click()
    cy.url().should('eq', 'http://localhost:3000/schedule/BOW')
    cy.get('.results-container')
    .find('.starting-point', 'Available Destinations From: Bowen Island')
    .get('.result-card')
    .contains('h1', 'Ferry Schedule to Horseshoe Bay')
  })

  it('user should be able to return to home page with the header logo', () => {
    cy.get('.home-logo')
    .click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})