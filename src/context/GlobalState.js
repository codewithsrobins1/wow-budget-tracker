import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    transactions: []
}

//Create Context - Pass in initial state
export const GlobalContext = createContext(initialState)

//Provider Component - To Wrap Around all Components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); //dispatch used to call reducer action

    //Delete a Transction
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    //Add a Transction
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    //Wrap the GlobalContext around the components to provide state
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
