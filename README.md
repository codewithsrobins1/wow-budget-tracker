# WoW Gold Tracker

A web application to track your gold income and expense transactions in World of Warcraft. Application was built with React utilizing the Context API for state management.

## Demo

![demo](https://github.com/codewithsrobins1/wow-gold-tracker/blob/master/pokemon-collect-gif.gif)

## Link to Live Site

https://wowgoldtracker.netlify.app/

## Objectives

* Build a budget tracking application with React
* Utilize the Context API to manage state
* Practice building a landing page for an application
* Create a wave-like SVG to implement on landing page

## Built With

* React

## Dependencies

1.	UUID (https://www.npmjs.com/package/uuid) – Create unique key IDs

## Getting Started

To get a local copy up and running follow these steps using your terminal.

### Installation

1. Clone the repo
```sh
git clone https://github.com/codewithsrobins1/wow-gold-tracker.git
```
2. Install NPM packages
```sh
npm install i

```

## React Components
* App.js – Renders the landing page and application.
*	Landing.js - Serves as the landing page for the application.
*	Balance.js - Displays the user's total current balance.
* Header.js - Displays the header on application section.
* IncomeExpenses.js - Calculates the income and expenses.
* NewTransaction.js - Form component that tracks the values from the input tags. Also has the button to submit transctions.
* TransactionList.js - Lists all the transctions.
* Transaction.js - Details each individual transction with the data that's been inputted from the form.

## Component Tree

To help visualize the structure of the components, please reference the below structure,

- App.js
  - Landing.js
  - Header.js
  - Balance.js
  - IncomeExpenses.js
  - TransactionList.js
    - Transaction.js
  - NewTransaction.js

## Credits

The Undermine Journal (https://theunderminejournal.com/#us/illidan) - Website that tracks all the latest WoW auction house news and economy
