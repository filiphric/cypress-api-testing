/// <reference types="cypress" />

it('creating a new list', function() {

  cy.request('POST', '/api/boards', { name: 'new board' })
    .then( ({ body } ) => {

      const boardId = body.id

      cy.request('POST', '/api/lists', {
        name: 'new list',
        boardId
      })

    })

})