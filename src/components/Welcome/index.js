// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  buttonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const text = this.buttonText()

    return (
      <div className="bg-container">
        <h1 className="title">Welcome</h1>
        <p className="caption">Thank you! Happy Learning</p>

        <button type="button" onClick={this.onSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
