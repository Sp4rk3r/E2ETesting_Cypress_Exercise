describe('My First Test', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: 'http://localhost:3004/todos',
      },
      {
        body: [
          {
            id: 1,
            text: 'First Todo',
            isCompleted: false,
          },
          {
            id: 2,
            text: 'Second Todo',
            isCompleted: false,
          },
          {
            id: 3,
            text: 'Give E2E testing Training',
            isCompleted: false,
          },
          {
            id: 4,
            text: 'Show mocking E2E api calls',
            isCompleted: true,
          },
        ],
      }
    ).visit('/');
  });
  it('Visits the initial project page', () => {
    cy.contains('todos');
  });

  it('Renders 4 todos', () => {
    cy.get('[data-cy="todo"]').should('have.length', 4);
    cy.get('[data-cy="todoLabel"]').eq(0).should('contain.text', 'First Todo');
    cy.get('[data-cy="todoLabel"]').eq(1).should('contain.text', 'Second Todo');
    cy.get('[data-cy="todoLabel"]')
      .eq(2)
      .should('contain.text', 'Give E2E testing Training');
    cy.get('[data-cy="todoLabel"]')
      .eq(3)
      .should('contain.text', 'Show mocking E2E api calls');
    cy.get('[data-cy="todoCheckBox"]').eq(3).should('be.checked');
  });

  // Write tests for Main, Header, Todo
});
