import React, { useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    const submitForm = e => {
        e.preventDefault();        
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000000),
            text, 
            amount: +amount
        }        
        console.log("🚀 ~ file: AddTransaction.js ~ line 17 ~ AddTransaction ~ newTransaction", newTransaction)
        addTransaction(newTransaction);
    };


    return (
        <>
            <h3>Add transaction</h3>
            <form onSubmit={submitForm}>
                <div className="form-control">
                    <label htmlFor="text">Transaction name</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /></label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className={(text === "" || parseInt(amount) === 0) ? 'btn disable-button': 'btn'}>Add transaction</button>
            </form>
        </>
    )
}
