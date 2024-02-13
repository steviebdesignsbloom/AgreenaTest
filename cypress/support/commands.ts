/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        validateCounterAndProduct(): Chainable<void>;
        validateCounterAndProductXS(): Chainable<void>;
        validateCounterAndProductS(): Chainable<void>;
        validateCounterAndProductM(): Chainable<void>;
        validateCounterAndProductL(): Chainable<void>;
        validateCounterAndProductXL(): Chainable<void>;
        validateCounterAndProductXXL(): Chainable<void>;
        placeOrder(): Chainable<void>;
        placeOrders(): Chainable<void>;
        removeProducts(): Chainable<void>;
        validateCartNoProducts(): Chainable<void>;
        validateFreeShipping(): Chainable<void>;
    }
}

const skaterBlackShirt = "25.90";
const batmanTShirt = "10.90";
const looseBlackTShirt = "14.00";
const threeProductsTotal = skaterBlackShirt + batmanTShirt + looseBlackTShirt;
let totalAmount = threeProductsTotal


Cypress.Commands.add('validateCounterAndProduct', () => {
    cy.get('[data-cy="Image"]').should('have.length', 16)
    cy.get('[data-cy="counter"]').should('have.text', '16')
})

Cypress.Commands.add('validateCounterAndProductXS', () => {
    cy.get('[data-cy="XS"]').click()
    cy.get('[data-cy="Image"]').should('have.length', 1)
    cy.get('[data-cy="counter"]').should('have.text', '1')
})

Cypress.Commands.add('validateCounterAndProductS', () => {
    cy.get('[data-cy="S"]').click()
    cy.get('[data-cy="Image"]').should('have.length', 2)
    cy.get('[data-cy="counter"]').should('have.text', '2')
})

Cypress.Commands.add('validateCounterAndProductM', () => {
    cy.get('[data-cy="M"]').click()
    cy.get('[data-cy="Image"]').should('have.length', 1)
    cy.get('[data-cy="counter"]').should('have.text', '1')
})

Cypress.Commands.add('validateCounterAndProductL', () => {
    cy.get('[data-cy="L"]').click()
    cy.get('[data-cy="Image"]').should('have.length', 10)
    cy.get('[data-cy="counter"]').should('have.text', '10')
})

Cypress.Commands.add('validateCounterAndProductXL', () => {
    cy.get('[data-cy="XL"]').click()
    cy.get('[data-cy="Image"]').should('have.length', 10)
    cy.get('[data-cy="counter"]').should('have.text', '10')
})

Cypress.Commands.add('validateCounterAndProductXXL', () => {
    cy.get('[data-cy="XXL"]').click()
    cy.get('[data-cy="Image"]').should('have.length', 4)
    cy.get('[data-cy="counter"]').should('have.text', '4')
})

Cypress.Commands.add('validateCartNoProducts', () => {
    cy.get('[data-cy="Cart-Icon"]').click()
    cy.get('[data-cy="Cart-Panel"]').should('be.visible')
    cy.get('[data-cy="Cart-Panel"]').should('contain', 'Add some products in the cart')
    cy.get('[data-cy="productQuantity"]').should('have.text', 0)

})

Cypress.Commands.add('placeOrder', () => {
      cy.get('button[data-cy="Skater Black Sweatshirt"]').click()
      cy.get('[data-cy="Cart-Panel"]').should('be.visible')
      cy.get('[data-cy="productQuantity"]').should('have.text', 1)
      cy.get('[data-cy="totalPrice"]').contains(skaterBlackShirt)
      cy.get('[data-cy="checkout"]').click()
      cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('Checkout - Subtotal: $ 25.90');
      })
})

Cypress.Commands.add('placeOrders', () => {
    cy.get('button[data-cy="Skater Black Sweatshirt"]').click()
    cy.get('[data-cy="Close"]').click()
    cy.get('button[data-cy="Black Batman T-shirt"]').click()
    // cy.wait(1000)
    cy.get('[data-cy="Close"]').click()
    cy.get('button[data-cy="Loose Black T-shirt"]').click()
    cy.get('[data-cy="Cart-Panel"]').should('be.visible')
    cy.get('[data-cy="productQuantity"]').should('have.text', 3)
    cy.get('[data-cy="totalPrice"]').invoke('text').then((text) => {
        const totalPriceOnPage = parseFloat(text.replace(/[^\d.]/g, '')); // Remove non-numeric characters
        let totalAmount = parseFloat(text.replace(/[^\d.]/g, ''));
        expect(totalPriceOnPage).to.equal(totalAmount);
      });
    cy.get('[data-cy="checkout"]').click()
    cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('Checkout - Subtotal: $ ',totalAmount);
    })
})

Cypress.Commands.add('removeProducts', () => {
    cy.get('button[data-cy="Skater Black Sweatshirt"]').click()
    cy.get('[data-cy="Close"]').click()
    cy.get('button[data-cy="Black Batman T-shirt"]').click()
    cy.get('[data-cy="Close"]').click()
    cy.get('button[data-cy="Loose Black T-shirt"]').click()
    cy.get('[data-cy="Cart-Panel"]').should('be.visible')
    cy.get('[data-cy="remove"]').first().click()
    cy.get('[data-cy="remove"]').first().click()
    cy.get('[data-cy="remove"]').first().click()
    cy.get('[data-cy="productQuantity"]').should('have.text', 0)
})

Cypress.Commands.add('validateFreeShipping', () => {
    cy.get('[data-cy="Free shipping"]').should('contain', 'Free shipping')
    .should("have.length", 13)
    
})