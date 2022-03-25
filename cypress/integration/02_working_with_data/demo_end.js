/// <reference types="cypress" />

beforeEach( () => {
  cy.request('POST', '/api/boards', { name: 'new board' })
    .as('board')
})

beforeEach(function() {
  const boardId = this.board.body.id

  cy.request('POST', '/api/lists', {
    name: 'new list',
    boardId
  }).as('list')
});

it('creating a new list', function() {

  const boardId = this.board.body.id
  const listId = this.list.body.id

  cy.request('POST', '/api/lists', {
    name: 'new list',
    boardId,
    listId
  })
  

})