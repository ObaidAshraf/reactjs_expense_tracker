import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
    const { transactions } = useContext(GlobalContext)
    let balance = 0;
    console.log(transactions)
    transactions.map(transaction => {
        return balance += transaction.amount
    })

    balance = balance.toFixed(2)
    return (
        <>
            <h4>Balance</h4>

            <h1>${balance}</h1>
        </>
    )
}

export default Balance