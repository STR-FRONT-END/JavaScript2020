# [Cypress](https://www.youtube.com/watch?time_continue=450&v=VvLocgtCQnY&feature=emb_logo)
* [Cypress](https://www.cypress.io/)
* [Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
* [Github](https://github.com/cypress-io/)
* [Gitter](https://gitter.im/cypress-io/cypress)

* There is a direct download without using npm
* start with a folder with a package.json file `npm init -y`
* install cypress `npm install cypress --save-dev`
* Run cypress using `node_modules/.bin/cypress open`
* crea a test file in cypres/intergration with the `_spec.js` exstention, it will show up in the intergration test list
* click on the new file in the list to launch it in the cypress test runner


# Writtig Test
* describe and it functions come from Mocha
* describe function: helps us keep organized by grouping related test together
* it function: what our test does

### Assertion
* expect: comes from try assertion library
* to:
* equal: 