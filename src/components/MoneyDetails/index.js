// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props

  return (
    <div className="money-details-container">
      <div className="balance-container balance-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div>
          <p className="sub-balance">Your Balance</p>
          <p className="sub-income" data-testid="balanceAmount">
            RS {income - expenses}
          </p>
        </div>
      </div>
      <div className="balance-container balance-container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div>
          <p className="sub-balance">Your Income</p>
          <p className="sub-income" data-testid="incomeAmount">
            RS {income}
          </p>
        </div>
      </div>

      <div className="balance-container balance-container3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div>
          <p className="sub-balance">Your Expenses</p>
          <p className="sub-income" data-testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
