import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Food', amount: -25},
        { id: 2, text: 'Jeans', amount: -59},
        { id: 3, text: 'Bicycle', amount: -499},
        { id: 4, text: 'Phone', amount: -990},
        { id: 5, text: 'Shoes', amount: -99},
        { id: 6, text: 'T-shirt', amount: -39},        
        { id: 7, text: 'Salary', amount: +3009}
    ]
}

// Create context 
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transactionObject) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactionObject
        });
    }


    //end of Actions Section

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>
    )
}