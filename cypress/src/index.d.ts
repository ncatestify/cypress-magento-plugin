declare namespace Cypress {
  interface Chainable<Subject = any> {
    ttSortByPrice(): void;
    ttValidatePrices(): void;
    ttChangeDisplayedProductsAmount(number: string): void;
    ttSearchForMultipleResults(): void;
    ttProductHasPriceAndTitle(): void;
    ttProductHasImage(): void;
    ttSearchForNoResults(): void;
    ttCanAddToCartAndWishlist(): void;
    ttValidateStartpage(): void;
  }
}
