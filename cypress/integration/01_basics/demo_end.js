/// <reference types="cypress" />

afterEach( () => {
  cy.visit('/')
})

it('sends a request over API', () => {

  cy.request('POST', '/api/boards', {
    name: "I created this board using .request() command!"
  })
  
});

it('response gets 201 status', () => {

  cy
    .request('POST', '/api/boards', {
      name: "I created this board using .request() command!"
    })
    .its('status')
    .should('eq', 201)
  
});

it('testing board list', () => {

  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).then( ({status, body}) => {

    expect(status).to.eq(200)
    expect(body).to.have.length(2)
    expect(body[0].id).to.be.a('number')
    expect(body[0].starred).to.be.false
    expect(body[0].user).to.eq(0)

  })
  
});

it('filtering boards list', () => {

  cy.request({
    method: 'GET',
    url: '/api/boards',
    qs: {
      starred: true
    },
    headers: {
      accept: 'application/json'
    }
  }).then( ({status, body}) => {

    expect(status).to.eq(200)
    expect(body).to.have.length(1)

  })
  
});

before( () => {

  cy.request('POST', '/api/reset')

})  