import { listProductsPage } from "../page/listProductsPage";

function validateListInAZ() {
    let originalList = []
    let orderedList = []
    cy.get(listProductsPage.labelItens).each(($el, index, $lis) => {
        originalList.push($el.text().toString().trimStart())
        orderedList.push($el.text().toString().trimStart())
        orderedList.sort()
        expect(originalList, 'Items are sorted A - Z').to.deep.equal(orderedList);
    })
    cy.log(originalList)
    cy.log(orderedList)
}

function validateListInZA() {
    let originalList = []
    let orderedList = []
    cy.get(listProductsPage.labelItens).each(($el, index, $lis) => {
        originalList.push($el.text().toString().trimStart())
        orderedList.push($el.text().toString().trimStart())
        orderedList.sort(function (a, b) {
            return b - a;
        });
        expect(originalList, 'Items are sorted Z - A').to.deep.equal(orderedList);
    })
    cy.log(originalList)
    cy.log(orderedList)
}

module.exports = { validateListInAZ, validateListInZA }