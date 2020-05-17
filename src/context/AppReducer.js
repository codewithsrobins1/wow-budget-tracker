export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) //Send all transaction, except the one deleted
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions] //take the new transaction and combine with the current transactions
            }
        default: 
            return state;
    }
} 