import React, { Component } from 'react'
import store from '../store'
// import auth from '../utils/auth'
// import moment from 'moment'

class Message extends Component {
  render () {
    return <div className='chatItem'>
      <div className='chatText'>
        <div className='userBar'>
          <div className={this.props.username === 'SpeekBot' ? 'user--bot' : 'user'} ref={this.props.username}>{this.props.username}</div>
          <div className='timestamp'>{this.props.time}</div>
        </div>
        <div className='message' dangerouslySetInnerHTML={{__html: `${this.props.text}`}} />
      </div>
    </div>
  }
}

export default Message
