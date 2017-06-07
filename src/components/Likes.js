import React, { Component } from 'react'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class Likes extends Component {
  _like = () => {
    // Do stuff?
  }
  render () {
    return <div className='likes'>
      <button onClick={this._like}>
        <i className='fa fa-thumbs-up' />
      </button>
      {/* store.likes needs to store multiple like values -
        one value for each message */}
      <p key>{store.likes}</p>
    </div>
  }
}

export default Likes
