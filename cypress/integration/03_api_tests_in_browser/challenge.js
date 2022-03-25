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

})

it('GET /api/boards?starred=true', function() {
  
})

it('GET /api/todos', function() {
  
})

it('POST /api/lists', function() {
  
})

it('POST /api/cards', function() {
  
})