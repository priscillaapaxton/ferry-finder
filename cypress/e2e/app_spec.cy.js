describe('app spec', () => {
  beforeEach(() => {
    cy.intercept('https://www.bcferriesapi.ca/api/', {
      statusCode: 200,
      fixture: 'data'
    })
    cy.visit('http://localhost:3000/')
  })
  it.skip('should display all information to user upon page arrival', () => {
    cy.get('header')
    .get('.home-logo')
    cy.contains('.header-title', 'Ferry Finder')
    cy.contains('.header-slogan', 'Relax. We\'ve got it figured out so you don\'t have to.')
    .get('.dropdown')
    .find('.dropdown-text', 'Where are you located?')
    .get('select')
    .should('contain', 'Bowen Island')
    .should('contain', 'Duke Point')
    .should('contain', 'Fulford Bay')
    .should('contain', 'Horseshoe Bay')
    .should('contain', 'Langdale')
    .should('contain', 'Nanaimo')
    .should('contain', 'Swartz Bay')
    .should('contain', 'Tsawwassen')
    .get('.submit-button')
  })
})

