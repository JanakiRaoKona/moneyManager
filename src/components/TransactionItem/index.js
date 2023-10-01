// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyItem, onDeleteItem} = props
  const {title, amount, type, id} = historyItem
  const types = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()

  const onClickButton = () => {
    onDeleteItem(id)
  }

  return (
    <>
      <li className="list-cont">
        <p className="history-list">{title}</p>
        <p className="history-list">Rs {amount}</p>
        <p className="history-list">{types}</p>
        <button
          type="button"
          className="button1"
          onClick={onClickButton}
          data-testid="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </li>
    </>
  )
}
export default TransactionItem
