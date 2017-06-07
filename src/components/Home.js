import React, { Component } from 'react'
import store from '../store'
import auth from '../utils/auth'
import { observer } from 'mobx-react'

@observer
class Home extends Component {
  _submit = (event) => {
    event.preventDefault()
    if (!auth.isSignedIn) {
      store.username = this.refs.username.value
      if (store.username.length > 0) {
        window.localStorage.setItem('username', `${store.username}`)
        store.announceUser(`@${store.username} has entered`)
        this.props.history.push('/chat')
        console.log(`@${store.username} has logged in`)
      } else {
        window.alert('You must have a username.')
      }
    }
  }
  _click = () => {
    auth.signIn()
    store.username = auth.facebookName
    window.localStorage.setItem('username', `${store.username}`)
    store.announceUser(`@${store.username} has entered`)
    console.log(`@${store.username} has entered`)
  }
  render () {
    if (auth.isSignedIn) {
      this.props.history.push('/chat')
    }
    return <div className='Home'>
      <h1>Speek</h1>
      <div className='login-options'>
        <button className='loginButton' onClick={this._click}><i className='fa fa-facebook' /></button>
        <p>or</p>
        <form className='usernameSubmit' onSubmit={this._submit}>
          <input className='userName' ref='username' placeholder='Username' />
        </form>
      </div>
    </div>
  }
}

export default Home
