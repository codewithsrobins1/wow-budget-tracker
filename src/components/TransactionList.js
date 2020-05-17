import React, { useContext } from 'react'
import Transaction from './Transaction'

//Context
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);  //Get access to the state

    return (
        <div>
            <h3>Transactions</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
                
            </ul>
        </div>
    )
}

export default TransactionList
