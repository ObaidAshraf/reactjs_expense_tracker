import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


function IncomeExpense() {
    const { transactions } = useContext(GlobalContext)
    let income = 0, expense = 0;

    transactions.map(transaction => {
      if (transaction.amount > 0)
        return income += transaction.amount
      else
        return expense += transaction.amount
    })

    income = income.toFixed(2)
    expense = expense.toFixed(2)
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${Math.abs(expense)}</p>
        </div>
      </div>
    )
}

export default IncomeExpense