/// <reference types="cypress" />

import spok from 'cy-spok'

before(function() { cy.request('POST', '/api/reset') })

beforeEach(function() {
  cy.request('POST', '/api/boards', { name: 'new board' })
    .as('board')
})

beforeEach(function() {
  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.board.body.id })
    .as('list')
});

beforeEach(function() {
  cy.request('POST', '/api/cards', { name: 'new card', boardId: this.board.body.id, listId: this.list.body.id })
    .as('card')
});

it('GET /api/cards', function() {

  cy.api({
    url: `/api/cards/${this.card.body.id}`,
    headers: {
      accept: 'application/json'
    }
  }).then(spok({
    status: 200,
    body: {
      completed: false,
      description: ''
    }
  }))
  
})