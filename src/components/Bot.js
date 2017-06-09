import React, { Component } from 'react'
class Bot extends Component {
  render () {
    return <div className='chatItem'>
      <div className='chatText'>
        <div className='userBar'>
          <div className='user--bot'>SpeekBot</div>
        </div>
        <div className='message'> <em>{this.props.message}</em></div>
      </div>
    </div>
  }
}

export default Bot
