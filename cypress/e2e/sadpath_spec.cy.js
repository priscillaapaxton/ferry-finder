describe('user link errors', () => {
  beforeEach(() => {
    cy.intercept('https://www.bcferriesapi.ca/api/', {
      statusCode: 200,
      fixture: 'data'
    })
  })

  it('should display to the user if a bad url path is input', () => {
    cy.visit('http://localhost:3000/kjsaf')
    cy.get('.bad-url-container')
      .get('.bad-url-logo')
      .get('.bad-url-container')
      .contains('Uh-oh. There doesn\'t appear to be anything here.')
    cy.get('.return-home')
  })

  it('should display to the user if a bad url path is input', () => {
    cy.visit('http://localhost:3000/schedule/jaknsf')
    cy.get('.bad-url-container')
      .get('.bad-url-logo')
      .get('.bad-url-container')
      .contains('Uh-oh. There doesn\'t appear to be anything here.')
    cy.get('.return-home')
  })

  it('should display to the user if a bad url path is input', () => {
    cy.visit('http://localhost:3000/schedule/jaknsf/kjadsh')
    cy.get('.bad-url-container')
      .get('.bad-url-logo')
      .get('.bad-url-container')
      .contains('Uh-oh. There doesn\'t appear to be anything here.')
    cy.get('.return-home')
  })

  it('should display to the user if a bad url path is input', () => {
    cy.visit('http://localhost:3000/schedule/jaknsf/HSB')
    cy.get('.bad-url-container')
      .get('.bad-url-logo')
      .get('.bad-url-container')
      .contains('Uh-oh. There doesn\'t appear to be anything here.')
    cy.get('.return-home')
  })

  it('should display to the user if a bad url path is input', () => {
    cy.visit('http://localhost:3000/hgvgh/jaknsf/HSB')
    cy.get('.bad-url-container')
      .get('.bad-url-logo')
      .get('.bad-url-container')
      .contains('Uh-oh. There doesn\'t appear to be anything here.')
    cy.get('.return-home')
  })
})


// describe('sad path spec', () => {


//   it.skip('should display error image if there is an issue wit.skiph the API server', () => {
//     cy.intercept('https://www.bcferriesapi.ca/api/', {
//       statusCode: 503,
//       body: 'Error: Failed to fetch'
//     })
//     cy.visit('http://localhost:3000/')
//     cy.find('.error-container')
//     .contains('.error-logo')
//     .contains('p', 'Man overboard! Looks like we are experiencing some issues with our server...')
//   })

//   it.skip('should display error image if there is an issue with the API server', () => {
//     cy.intercept('https://www.bcferriesapi.ca/api/', {
//       statusCode: 504,
//       body: 'Error: Failed to fetch'
//     })
//     cy.visit('http://localhost:3000/')
//     cy.find('.error-container')
//     .contains('.error-logo')
//     .contains('p', 'Man overboard! Looks like we are experiencing some issues with our server...')
//   })