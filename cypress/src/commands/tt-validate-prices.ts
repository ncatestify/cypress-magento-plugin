import selectors = require('../../fixtures/selectors/category.json');

export const ttValidatePrices = () => {
  cy.log('ttValidatePrices - NCA Testify');

  //push product prices into array
  const pricesArray: number[] = [];
  cy.get(selectors.productPriceID + '>' + selectors.prices)
    .each((price) => {
      const priceTrimmed = price.text().trim().replace(/,/g, '.').replace(/€/g, '');
      pricesArray.push(parseFloat(priceTrimmed));
    })
    //then validate prices are increasing
    .then(() => {
      pricesArray.forEach((price, i) => {
        if (i + 1 < pricesArray.length) {
          expect(price).to.be.lte(pricesArray[i + 1]);
        }
      });
    });
};
