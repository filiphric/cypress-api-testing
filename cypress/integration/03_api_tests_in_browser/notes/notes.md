# Showing API in browser
Cypress opens a browser and prints each command to console, which means we can take a look into the details of each request.

Opening console each time can be time-consuming, but we can auto-open console by passing a flag into the browser. This can be done in `plugins/index.js` file.

```js
module.exports = (on, config) => {

  on('before:browser:launch', ({ name }, launchOptions) => {

    if (name === 'chrome') {
      launchOptions.args.push('--auto-open-devtools-for-tabs');
    }

    return launchOptions;
  })
  
}
```

## Using a cy-api plugin
- With this plugin, you can show your requests and responses right in the browser
- install the plugin using [instructions on README page](https://github.com/bahmutov/cy-api)
- add `import '@bahmutov/cy-api'` to your `support/index.js` file
- use `cy.api()` command instead of `cy.request()` and your results will get printed out to the browser
- `cy.api()` does not support the short form -> `cy.api('DELETE`', '/api/boards')` will not work, you must use `cy.api({ method: 'DELETE, url: '/api/boards' })`

## Useful reading
- [my article on API testing in Cypress](https://filiphric.com/cypress-basics-api-testing)
- [cy-api readme](https://github.com/bahmutov/cy-api)