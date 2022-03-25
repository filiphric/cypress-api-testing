/// <reference types="cypress" />

// #1: go to https://github.com/bahmutov/cy-spok and follow the installation instructions to install cy-spok plugin
before(function() { cy.request('POST', '/api/reset') })

beforeEach(function() {
  cy.request('POST', '/api/boards', { name: 'new board' })
    .as('board')
})

beforeEach(function() {
  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.board.body.id })
    .as('list')
});

// #2: fill these tests some assertions using cy-spok plugin
it('POST /api/boards', function() {

  cy.api({
    method: 'POST',
    url: '/api/boards',
    body: {
      name: 'new board'
    }
  })

})

it('GET /api/boards?starred=true', function() {

  cy.api({
    method: 'GET',
    url: '/api/boards',
    qs: {
      starred: true
    },
    headers: {
      accept: 'application/json'
    }
  })

})

it('POST /api/lists', function() {

  cy.api({
    method: 'POST',
    url: '/api/lists',
    body: {
      name: 'new list',
      boardId: this.board.body.id
    }
  })

})

it('POST /api/cards', function() {

  cy.api({
    method: 'POST',
    url: '/api/cards',
    body: {
      name: 'new list',
      boardId: this.board.body.id,
      listId: this.list.body.id
    }
  })

})