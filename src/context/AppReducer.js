
export default (state, action) => {
    switch(action.type) {
        // Delete action from global state
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(x => x.id != action.payload)
            }
        default: 
            return state;
    }
}