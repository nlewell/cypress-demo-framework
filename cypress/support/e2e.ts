// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import '@applitools/eyes-cypress/commands'

import './commands'
import 'cypress-mochawesome-reporter/register'
import '@cypress-audit/lighthouse/commands'
import 'cypress-real-events/support';
import '@testing-library/cypress'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-grep')()
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')
declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        // typeLogin(userKey?: string): Chainable<Response<any>>
        // logout(): Chainable<Response<any>>
        logging(): Chainable<any>
        getLocalStorage(): Chainable<any>
        setLocalStorage(): Chainable<any>
      }
    }
  }
