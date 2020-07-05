function AppReducer(state, action) {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            console.log(state.transactions)
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload )
            }
        default:
            return state;
    }
}

export default AppReducer