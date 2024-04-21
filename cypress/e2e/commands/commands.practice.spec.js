  // Cypress comes with its own API for creating custom commands
    // and overwriting existing commands. The built in Cypress commands
    // use the very same API that's defined below.

    //First step is creating a new command file under /support/commands.js
    //Why there? since it is loaded before any test files are evaluated via
    //an import statement in your supportFile (cypress/support/index.js by default).


    describe('Commands Example', function(){

        beforeEach(function(){
            cy.visit('https://www.ancestryclassroom.com')
            const token = 'abcd123';
        })

        it("Set a token in local storage", ()=>{
            cy.setLocalStorage('token',token);
        })

        it('get a token from local storage', ()=> {
            cy.getLocalStorage('token').should('eq',token);
        })
    })