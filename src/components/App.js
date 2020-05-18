import React from 'react';

//Context
import {GlobalProvider} from '../context/GlobalState'

//Components
import Header from './Header'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import NewTransaction from './NewTransaction'
import LandingPage from './LandingPage'

//Styles
import '../styles/App.css';

function App() {
  return (
    <div>
      <section className="landing-page">
        <LandingPage />
      </section>
      <section className="application">
        <GlobalProvider>
          <Header />
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <NewTransaction />
          </div>
        </GlobalProvider>
      </section>
    </div>
  );
}

export default App;
