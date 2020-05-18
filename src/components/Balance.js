import React, {useContext} from 'react'

//Context
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const {transactions} = useContext(GlobalContext);  //Get access to the state

    //Map through the state for all the amounts
    const amounts = transactions.map(transaction => transaction.amount);

    //Get the total amount - Start at 0 and add values from state
    //Output: (0 - 20, -20 + 300, 280 - 10, 270 + 150) = 420 
    const total = amounts.reduce((acc, item) => (acc += item), 0)

    return (
        <div className="app-balance">
            <h4>Your Balance:</h4>
            <h1><span className="goldCoin"><img src="goldCoin.svg" alt="gold coin" /></span>{total}</h1>
        </div>
    )
}

export default Balance;