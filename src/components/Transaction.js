import React, {useContext} from 'react'

//Context
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);  //Get access to the state

    //Determine the sign to use for the amount (negative or positive)
    const sign = transaction.amount < 0 ? '-' : '+';

    
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>
                {sign}
                <span className="goldCoin"><img src="goldCoin.svg" alt="gold coin" /></span>
                {Math.abs(transaction.amount)}
            </span>
            <button className="delete-button" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction;
