import React, { Component } from 'react'
// import moment from 'moment'
// import store from '../store'
class Bot extends Component {
  render () {
    return <div className='chatItem' key={this.props.key}>
      <div className='chatText'>
        <div className='userBar'>
          <div className='user--bot'>{this.props.bot}</div>
          {/* <div className='timestamp'>{moment().fromNow()}</div> */}
        </div>
        <div className='message'> <em>{this.props.message}</em></div>
      </div>
    </div>
  }
}

export default Bot
