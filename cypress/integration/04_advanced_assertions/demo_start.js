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

it('GET /api/cards', function() {

  cy.request({
    url: `/api/cards/${this.card.body.id}`,
    headers: {
      accept: 'application/json'
    }
  }).then( ({ body, status }) => {

    expect(status).to.eq(200)

    expect(body.name).to.eq('new card')
    expect(body.boardId).to.eq(this.board.body.id)
    expect(body.listId).to.eq(this.list.body.id)
    expect(body.id).to.be.a('number')
    expect(body.created).to.be.a('string')
    expect(body.deadline).to.be.a('string')
    expect(body.description).to.be.empty
    expect(body.completed).to.be.false

  })
  
})