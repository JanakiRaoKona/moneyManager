import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    historyList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const parsedAmount = parseFloat(amount)
    const newHistoryItem = {
      id: uuidv4(),
      title,
      amount: parsedAmount,
      type,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistoryItem],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))

    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parsedAmount,
      }))
    }

    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses + parsedAmount,
      }))
    }
  }

  onDeleteItem = id => {
    const {historyList} = this.state
    const deletedData = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({
      historyList: deletedData,
    })

    const upDateBalance = historyList.find(eachItem => eachItem.id === id)
    if (upDateBalance) {
      if (upDateBalance.type === 'INCOME') {
        this.setState(prevState => ({
          income: prevState.income - parseFloat(upDateBalance.amount),
        }))
      }

      if (upDateBalance.type === 'EXPENSES') {
        this.setState(prevState => ({
          expenses: prevState.expenses - parseFloat(upDateBalance.amount),
        }))
      }
    }
  }

  render() {
    const {title, amount, type, historyList, income, expenses} = this.state

    return (
      <div className="money-manage-container">
        <div>
          <div className="rechard-container">
            <h1 className="hi-heading">Hi , Rechard</h1>
            <p className="welcome-para">
              Welcome back to your{' '}
              <span className="money-para">Money Manager</span>
            </p>
          </div>

          <MoneyDetails income={income} expenses={expenses} />
          <div className="bottom-container">
            <div className="add-trans-cont">
              <h1 className="add-heading">Add Transaction</h1>
              <form className="form-container" onSubmit={this.submitForm}>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  id="title"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                  value={title}
                  className="input-cont"
                />
                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                  value={amount}
                  className="input-cont"
                />
                <label htmlFor="type" className="label">
                  TYPE
                </label>
                <select
                  id="type"
                  className="select-option"
                  onChange={this.onChangeType}
                  value={type}
                >
                  {transactionTypeOptions.map(eachItem => (
                    <option
                      key={eachItem.optionId}
                      value={eachItem.optionId}
                      className="option"
                    >
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <div>
                  <button className="button" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>

            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <ul className="ul-list-container">
                <li className="list-cont">
                  <p className="history-list">Title</p>
                  <p className="history-list">Amount</p>
                  <p className="history-list">Type</p>
                </li>
                {historyList.map(eachItem => (
                  <TransactionItem
                    historyItem={eachItem}
                    key={eachItem.id}
                    onDeleteItem={this.onDeleteItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
