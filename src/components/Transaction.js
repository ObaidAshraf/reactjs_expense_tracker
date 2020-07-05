import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transaction({ transaction }) {
    const { delete_transaction } = useContext(GlobalContext)

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}</span>
            <button onClick={() => delete_transaction(transaction.id)} className="delete-btn">x</button>
        </li> 
    )
}

export default Transaction