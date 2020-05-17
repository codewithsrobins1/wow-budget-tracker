import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid'

const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const {addTransaction} = useContext(GlobalContext);  //Get access to the state

    // const integer = parseInt(amount, 10)
    
    const addNewTransaction = e => {
        e.preventDefault();
        const NewTransaction = {
            id: uuidv4(),
            text, 
            amount: +amount //shorthand to parseInt -- add the + to the variable
        }
        addTransaction(NewTransaction)
    }


    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={addNewTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">
                    Add transaction
                </button>
      </form>
        </div>
    )
}


export default NewTransaction;