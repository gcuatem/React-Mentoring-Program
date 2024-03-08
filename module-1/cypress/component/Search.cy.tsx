import Counter from "../../src/Components/Counter/Counter"

describe('Search.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<Counter initialValue={0}></Counter>);
    cy.get('[data-testid="Cy-Counter-Title"]').should('exist');
    cy.get('[data-testid="Cy-Counter-Text"]').should('exist');
    cy.get('[data-testid="Cy-Counter-Increment"]').should('exist');
    cy.get('[data-testid="Cy-Counter-Decrement"]').should('exist');
  })
})