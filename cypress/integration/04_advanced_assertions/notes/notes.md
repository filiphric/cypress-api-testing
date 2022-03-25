# Advanced API testing using API cy-spok plugin

Sometimes we cannot predict data that our server generates (or aren’t interested in all of it).
Yet, if our test looks something like this:

```js
expect(body.name).to.eq('new card')
expect(body.boardId).to.eq(this.board.body.id)
expect(body.listId).to.eq(this.list.body.id)
expect(body.id).to.be.a('number')
expect(body.created).to.be.a('string')
expect(body.deadline).to.be.a('string')
expect(body.description).to.be.empty
expect(body.completed).to.be.false
```

We might want to refactor it.

## cy-spok
[cy-spok](https://github.com/bahmutov/cy-spok) is a Cypress wrapper around the spok assertion library which adds some additional testing capabilities. Most notably, you can define which parts of the response object you are interested in.

```js
cy.request({
    url: `/api/cards/${this.card.body.id}`,
    headers: {
      accept: 'application/json'
    }
  }).then(spok({
    status: 200,
    body: {
      completed: false,
      description: '',
      created: spok.string
    }
  }))
```

## Useful reading
- [cy-spok documentation](https://github.com/bahmutov/cy-spok)
- [cy-spok example usage](https://github.com/bahmutov/cy-spok-example)
- [detailed blog around cy-spok plugin](https://www.cypress.io/blog/2019/12/23/asserting-network-calls-from-cypress-tests/)