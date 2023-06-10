describe('server error spec', () => {

  it('should display error image if there is an erroneous url in the network request', () => {
  cy.intercept('GET','https://www.bcferriesapi.ca/api/', {
    statusCode: 500,
    fixture: 'faileddata'
  })
  .visit('http://localhost:3000/')
  cy.get('.error-container')
  .get('.error-logo')
  .get('.error-container')
  .contains('p', 'Man overboard! Looks like we are experiencing some issues with our server...')
})

  it('should display error image if there is an issue wit.skiph the API server', () => {
    cy.intercept('https://www.bcferriesapi.ca/api/', {
      statusCode: 503,
      body: 'Error: Failed to fetch'
    })
    cy.visit('http://localhost:3000/')
    cy.get('.error-container')
    .get('.error-logo')
    .get('.error-container')
    .contains('p', 'Man overboard! Looks like we are experiencing some issues with our server...')
  })

  it('should display error image if there is an issue with the API server', () => {
    cy.intercept('https://www.bcferriesapi.ca/api/', {
      statusCode: 504,
      body: 'Error: Failed to fetch'
    })
    cy.visit('http://localhost:3000/')
    cy.get('.error-container')
    .get('.error-logo')
    .get('.error-container')
    .contains('p', 'Man overboard! Looks like we are experiencing some issues with our server...')
  })
})

