# Testing for magento

![Magento_Logo](https://user-images.githubusercontent.com/108877931/214883559-6ff3d5a2-af1d-4f66-9eb2-4595e1c5a64c.png)

# Important

This project is inspired by elgentos/magento2-cypress-testing-suite: https://github.com/elgentos/magento2-cypress-testing-suite

## Installation

Clone repository.

`$ git clone git@github.com:ncatestify/cypress-magento-plugin.git`

Navigate into project folder and install dependencies.

```bash
$ cd <project-folder>
$ npm install
```

## Setup

### BaseUrl
Update BaseUrl in cypress.config.ts. The BaseUrl should **not** end with the "/".

`baseUrl: 'https://testify.team'`

or use

`$ CYPRESS_baseUrl=[your baseUrl] npx cypress run/open`

### Selectors
Update selectors under cypress/fixtures/selectors.

## Run

`$ npx cypress run`

Or if you want to use the GUI

`$ npx cypress open` or `$ npm run cypress:open`

## TESTIFY Commands

https://github.com/ncatestify/cypress-base-plugin

## TESTIFY Magento Cypress Commands

#### Validate product can be added to cart, wishlist and compare list

```js
cy.ttaddCartWishlistCompare()
```

#### Validate product has image

```js
cy.ttProductHasImage()
```

#### Validate product has price and title

```js
cy.ttProductHasPriceAndTitle()
```

#### Can get multiple results in search

```js
cy.ttSearchForMultipleResults()
```

#### Validate search returns no results for searchword without entries

```js
cy.ttSearchForNoResults()
```

#### Set color filter (specify color by changing the selector in category.json)

```js
cy.ttSetFilterColor()
```

#### Sort products by price

```js
cy.ttSortByPrice()
```

#### Validate sorting by price is working

```js
cy.ttValidatePrices()
```

### Open Source project by TESTIFY.TEAM

[TESTIFY.TEAM](https://testify.team) - WE FIND BUGS. **AUTOMATED**.

[German YouTube Cypress.IO Live Coding Playlist](https://www.youtube.com/watch?v=mb_PTxDeJKI&list=PLKrKzhBjw2Y9ceCxO3ollOc4eIVPAjiHs)

[How to start with this Cypress.IO template on YouTube](https://youtu.be/b27PciNzreY)
