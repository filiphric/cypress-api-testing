/// <reference types="cypress" />

before(() => {
  cy.request('POST', '/api/reset')
});

// #1: create a new board using API in the beforeEach and add an alias to it 
beforeEach(() => {
  cy.request('POST', '/api/boards', { name: 'board 1' }).as('board')
});

// #2: create a new list using API
// #3: move the creation of the new list to a beforeEach hook
beforeEach('creates a new list', function() {

  cy.request('POST', '/api/lists', {
    name: 'list 1',
    boardId: this.board.body.id
  })
    .as('list')
  
});

// #3: create a new card
it('creates a new card', function() {

  cy.request('POST', '/api/cards', {
    name: 'card 1',
    boardId: this.board.body.id,
    listId: this.list.body.id
  })

})

// #4: create a new card and complete it
it('creates a new card and marks it as completed', function() {

  cy.request('POST', '/api/cards', {
    name: 'card 2',
    boardId: this.board.body.id,
    listId: this.list.body.id
  }).as('card')

  cy.then( () => {
    cy.request('PATCH', `/api/cards/${this.card.body.id}`, {
      completed: true,
    })
  }) 

})