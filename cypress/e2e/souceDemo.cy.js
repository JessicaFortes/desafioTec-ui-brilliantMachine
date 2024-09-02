import { listProductsPage } from "../support/page/listProductsPage"
import listProductsAction from "../support/utils/listProductsAction"

describe('Swag Labs', () => {
  it('validate product ordering', () => {
    cy.login()
    cy.get(listProductsPage.selectedOrder).invoke('text').should('eq', "Name (A to Z)")
    cy.screenshot()
    listProductsAction.validateListInAZ();
    cy.get(listProductsPage.selectNewOrder).select("Name (Z to A)")
    cy.screenshot()
    listProductsAction.validateListInZA();
  })
})