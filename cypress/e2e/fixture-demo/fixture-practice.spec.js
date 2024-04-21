context('Fixtures Demo',  function(){
    beforeEach(function(){
        //cy.visit('https://www.saucedemo.com/');
    });

    it('example fixture', function(){
        cy.fixture('example')
        .then((data) => {
            cy.log('DATA: ', data);
        })
    });

    it("sets localStorage", function(){
        
    })
})