// import React from 'react'
// import App from '.src/components/App/App.tsx'

// let totalCount

describe('React shopping card frontend tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  context('Validating header counter with products', () => {
    it('Validate that the products counter matches the products displayed', () => {
      cy.validateCounterAndProduct()
      // cy.get('[data-cy="counter"]').then((value) => {
      //   totalCount = Cypress.$(value).length;
      //   expect(value).to.have.length(totalCount);
      // })
    })

    it('Validate product count with products displayed for XS', () => {
      cy.validateCounterAndProductXS()
    })

    it('Validate product count with products displayed for S', () => {
      cy.validateCounterAndProductS()
    })

    it('Validate product count with products displayed for M', () => {
      cy.validateCounterAndProductM()
    })

    it('Validate product count with products displayed for L', () => {
      cy.validateCounterAndProductL()

    })

    it('Validate product count with products displayed for XL', () => {
      cy.validateCounterAndProductXL()

    })

    it('Validate product count with products displayed for XXL', () => {
      cy.validateCounterAndProductXL()
    })
  })

  context('Adding products to cart and placing an order', () => {
    it('Validate cart when there is no products added', () => {
      cy.validateCartNoProducts()
    })
     
    it('Place an order for 1 product', () => {
      cy.placeOrder()
    })

    it('Place an order for 3 product', () => {
      cy.placeOrders()
    })

    it('Remove product', () => {
      cy.removeProducts()
    })
  })

  context('Validate user can search for products with free shipping', () => {
    it('Validate the number of products with Free shipping', () => {
      cy.validateFreeShipping()
    })
     
    // it('Place an order for 1 product', () => {
    //   cy.placeOrder()
    // })
  })
})
