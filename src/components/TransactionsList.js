import React, {useContext} from 'react';
import { Transaction } from './Transaction';
import {GlobalContext} from '../context/GlobalState'

export const TransactionsList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(trans => (<Transaction transaction={trans} key={trans.id} />))}
                
            </ul>
        </>
    )
}
