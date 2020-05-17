import React, {useContext} from 'react'

//Context
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);  //Get access to the state

    //Map through the state for all the amounts
    const amounts = transactions.map(transaction => transaction.amount);

    //Calculate Income
    const income = amounts
        .filter(item => item > 0)   //Check the amounts in state and create a new array with values > 0
        .reduce((acc, item) => (acc += item), 0) //Add the amounts up for the new array
        
    //Calculate Expenses
    const expense = (
        amounts.filter(item => item < 0)    //Check the amounts in state and create a new array with values < 0
        .reduce((acc, item) => (acc += item), 0) * -1   //Multiple by -1 to get a negative value
      )

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">
                    +
                    <span className="goldCoin"><img src="goldCoin.svg" alt="gold coin" /></span>    
                    {income}
                </p>
            </div>

            <div>
                <h4>Expenses</h4>
                <p id="money-plus" className="money minus">
                    -
                    <span className="goldCoin"><img src="goldCoin.svg" alt="gold coin" /></span>    
                    {expense}
                </p>
            </div>
        </div>
    )
}

export default IncomeExpenses
