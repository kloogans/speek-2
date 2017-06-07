import React, { Component } from 'react'
// import auth from '../utils/auth'
// import moment from 'moment'

class Message extends Component {
  render () {
    return <div className='chatItem' key={this.props.key}>
      <div className='chatText'>
        <div className='userBar'>
          <div className='user' ref={this.props.username}>{this.props.username}</div>
          {/* <div className='timestamp'>{moment().fromNow()}</div> */}
        </div>
        <div className='message'> {this.props.text}</div>
      </div>
    </div>
  }
}

export default Message
