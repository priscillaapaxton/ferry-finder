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
