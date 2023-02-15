describe('Cowen App', () => {
  it('should test the happy path', () => {
    // Visit Home
    cy.visit('/');
    // Write a name in the filter
    cy.get('[data-testid="input-search-name"]').type('Leanne');
    // Get the first result
    cy.get('[data-testid="card-1"]').should('contain.text', 'Leanne').click();
    // Verify breadcrumbs
    cy.get('[data-testid="breadcrumbs"]').should('have.text', 'Home/Leanne Graham/Albums');
    // Get first album, verify and click through
    cy.get('[data-testid="album-1"]').should('have.text', 'quidem molestiae enim').click();
    // Get first photo and verify
    cy.get('[data-testid="photo-1"]').should('have.text', 'accusamus beatae ad facilis cum similique qui sunt');
  })
})
