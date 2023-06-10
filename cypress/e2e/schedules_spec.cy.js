describe('results spec', () => {
  beforeEach(() => {
    cy.intercept('https://www.bcferriesapi.ca/api/', {
      statusCode: 200,
      fixture: 'data'
    })
  })

  it('should take the use to a page that displays the correct new url for selected destination', () => {
    cy.visit('http://localhost:3000/schedule/BOW')
    .get('.results-container')
    .contains('Available Destinations From: Bowen Island')
    .get('.result-card')
    .contains('Ferry Schedule to Horseshoe Bay')
    .get('.result-nav-link')
    .click()
    cy.url().should('eq', 'http://localhost:3000/schedule/BOW/HSB')
  })

  it('should display the schedule', () => {
    cy.visit('http://localhost:3000/schedule/BOW/HSB')
    .get('.schedule-container')
    .get('.schedule-card')
    .should('have.length', 16)
  })

  it('should display schedule information on each card', () => {
    cy.visit('http://localhost:3000/schedule/BOW/HSB')
    .get('.schedule-card')
    cy.contains('p', 'Departs: 5:20 am')
    cy.contains('p', 'Arrives: 5:40 am')
    cy.contains('p', 'Current Passenger Capacity Status: 0%')
    cy.contains('p', 'Current Car Capacity Status: 0%')
    cy.contains('p', 'Current Oversized Vehicle Capacity Status: 0%')
    .children().last()
    cy.contains('p', 'Departs: 10:50 pm')
    cy.contains('p', 'Arrives: 11:10 pm')
    cy.contains('p', 'Current Passenger Capacity Status: 0%')
    cy.contains('p', 'Current Car Capacity Status: 0%')
    cy.contains('p', 'Current Oversized Vehicle Capacity Status: 0%')
  })

  it('should display a button so user can return to results component', () => {
    cy.visit('http://localhost:3000/schedule/BOW/HSB')
    .get('.back-to-results')
    .click()
    cy.url().should('eq', 'http://localhost:3000/schedule/BOW')
  })
})