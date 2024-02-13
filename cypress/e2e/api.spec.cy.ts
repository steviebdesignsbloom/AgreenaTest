describe('API Requests', () => {
    it(`Find pet by ID`, () => {
        cy.request({
          method: 'GET',
          url: `${Cypress.env('apiUrl')}/pet/10`,
          failOnStatusCode: false,
          headers: {
          Authorization: Cypress.env('authKey'),
          accept: 'application/json',
        },
        }).then((response) => {
            // cy.log(response.body.make, response.body.model, response.body.trim);
            expect(response.status).to.eq(200);
            expect(response.body.category).to.exist;
            expect(response.body.name).to.exist;
        });
    });
    it(`Create user`, () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/user`,
            // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            headers: {
                Authorization: Cypress.env('authKey'),
                accept: 'application/json',
            },
            body: {
                id: 56,
                username: 'jane.lane',
                firstName: 'James',
                lastName: 'Brown',
                email: 'jamesbrown@fake.com',
                password: 'password123',
                phone: '8967312435',
                userStatus: 0
            },
        }).then((response) => {
            // cy.log(response.body.make, response.body.model, response.body.trim);
            expect(response.status).to.eq(200);
            expect(response.body.code).to.exist;
            expect(response.body.message).to.exist; 
        })
    })


})