import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
    let [text, setText] = React.useState("")
    let [amount, setAmount] = React.useState(0)
    const { add_transaction } = useContext(GlobalContext)

    function onSubmit(evt) {
        evt.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: Number(amount)
        }

        add_transaction(newTransaction)
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(evt) => setText(evt.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(evt) => setAmount(evt.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction