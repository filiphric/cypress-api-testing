/// <reference types="cypress" />

// #1: go to https://github.com/bahmutov/cy-api and follow the installation instructions to install cy-api plugin
before(function() { cy.request('POST', '/api/reset') })

beforeEach(function() {
  cy.request('POST', '/api/boards', { name: 'new board' })
    .as('board')
})

beforeEach(function() {
  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.board.body.id })
    .as('list')
});

// #2: fill these tests with proper requests
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

it('GET /api/todos', function() {
  // remember, this endpoint does not exist in our app!

  cy.api({
    method: 'GET',
    url: '/api/todos',
    failOnStatusCode: false,
    headers: {
      accept: 'application/json'
    }
  })

})

it('POST /api/cards', function() {

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