![cypress](cypress.png)
# Cypress Command Line 

***

**Link to the Cypress guide**
* [Click here =>](https://docs.cypress.io/app/references/command-line) _https://docs.cypress.io/app/references/command-line_ (* - +)

## Open cypress 
```
npx cypress open
```

## Run all tests 
```
npx cypress run
```

## Run all tests in a spec file 
```
npx cypress run --spec "cypress/e2e/my-spec.cy.js"
```

## Run one specific tests
????

## Run with UI (--runner-ui)
```
npx cypress run --runner-ui
```


## Run headed (--headed)
```
npx cypress run --headed
```

## Run headless (--headless)
```
npx cypress run --headless
```

## Run in a browser (--browser, -b) 
```
npx cypress run --browser chrome / chromium / edge / electron / firefox
```

## Run in a browser (--config, -c)
* https://docs.cypress.io/app/references/configuration


## Run using a tag (--tag) 
```
cypress run --tag "staging"
```
## Using Scripts
```
{
  "scripts": {
    "e2e:chrome": "cypress run --browser chrome"
  }
}
```
```
npm run e2e:chrome
```
### Extending script options
```
npm run e2e:chrome -- --spec "cypress/e2e/my-spec.cy.js"
```

>***This document is for my personal notes and training***

Ctrl + Shift + p

Insert snippet