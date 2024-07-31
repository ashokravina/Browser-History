import './index.css'

const BrowserItem = props => {
  const {historyDetails, onDeleteitem} = props
  const {timeAccessed, title, logoUrl, domainUrl, id} = historyDetails
  const OnDelete = () => {
    onDeleteitem(id)
  }
  return (
    <li>
      <div className="history-container">
        <div className="date-container">
          <p className="date">{timeAccessed}</p>
          <div className="app-container">
            <img src={logoUrl} alt="logo" className="logo" />
            <div className="url-container">
              <p className="title">{title}</p>
              <p className="domain">{domainUrl}</p>
            </div>
          </div>
        </div>
        <div>
          <button className="button" type="button" onClick={OnDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-logo"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default BrowserItem
