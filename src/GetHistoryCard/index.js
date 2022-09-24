import './index.css'
import {Component} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const Getitem = props => {
  const {item, deleteite} = props
  const {id, timeAccessed, logoUrl, domainUrl, title} = item

  const deletehistory = () => {
    deleteite(id)
  }

  return (
    <li className="listel">
      <p>{timeAccessed}</p>

      <div className="timecontainer">
        <div className="timelogorow">
          <img className="websitelogo" src={logoUrl} alt="domain logo" />
          <div>
            <p className="para">{title}</p>
            <p className="para">{domainUrl}</p>
          </div>
        </div>
        <button
          testid="delete"
          className="button"
          type="button"
          onClick={deletehistory}
        >
          <img
            alt="delete"
            className="searchlogo"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

class GetHistoryCard extends Component {
  state = {searchfor: '', list: initialHistoryList}

  updatetext = event => {
    this.setState({searchfor: event.target.value})
  }

  deleteitem = id => {
    const {list} = this.state
    this.setState({list: list.filter(item => item.id !== id)})
  }

  render() {
    const {searchfor, list} = this.state

    const filteredlist = list.filter(item =>
      item.title.toLowerCase().includes(searchfor.toLowerCase()),
    )
    const iszero = filteredlist.length === 0
    return (
      <div className="historypage">
        <div className="top">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="applogo"
          />
          <div className="searchinputbox">
            <div className="searchiconbox">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="searchlogo"
                alt="search"
              />
            </div>
            <input
              onChange={this.updatetext}
              value={searchfor}
              className="input"
              type="search"
              placeholder="Search history"
            />
          </div>
        </div>
        {iszero && <p className="center">There is no history to show</p>}
        {!iszero && (
          <ul className="historycard">
            {filteredlist.map(item => (
              <Getitem item={item} key={item.id} deleteite={this.deleteitem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GetHistoryCard
