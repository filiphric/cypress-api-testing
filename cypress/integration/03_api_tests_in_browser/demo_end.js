/// <reference types="cypress" />

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

describe('/boards', () => {

  it('GET /api/boards', function() {

    cy.api({
      url: '/api/boards',
      headers: {
        accept: 'application/json'
      }
    })

  })

  it('POST /api/boards', function() {

    cy.api({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'new board'
      }
    })

  })

  it('PATCH /api/boards/:id', function() {

    cy.api({
      method: 'PATCH',
      url: `/api/boards/${this.board.body.id}`,
      body: {
        starred: true
      }
    })

  })

  it('DELETE /api/boards/:id', function() {

    cy.api({
      method: 'DELETE',
      url: `/api/boards/${this.board.body.id}`,
    })

  })

})

describe('/lists', () => {

  it('GET /api/lists', function() {

    cy.api({
      url: '/api/lists',
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

  it('PATCH /api/lists/:id', function() {

    cy.api({
      method: 'PATCH',
      url: `/api/lists/${this.list.body.id}`,
      body: {
        name: "renamed list",
      }
    })

  })

  it('DELETE /api/lists/:id', function() {

    cy.api({
      method: 'DELETE',
      url: `/api/lists/${this.list.body.id}`,
    })

  })

})

describe('/cards', () => {

  it('GET /api/cards', function() {

    cy.api({
      url: '/api/cards',
      headers: {
        accept: 'application/json'
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

  it('PATCH /api/cards/:id', function() {

    cy.api({
      method: 'PATCH',
      url: `/api/cards/${this.card.body.id}`,
      body: {
        completed: true,
      }
    })

  })

  it('DELETE /api/cards/:id', function() {

    cy.api({
      method: 'DELETE',
      url: `/api/cards/${this.card.body.id}`,
    })

  })

})