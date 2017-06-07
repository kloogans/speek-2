import React, { Component } from 'react'
import Chat from './Chat'
import Home from './Home'
import store from '../store'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

class App extends Component {
  componentDidMount () {
    store.load()
  }

  render () {
    return <Router>
      <div className='App'>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/chat' component={Chat} />
            {
              store.username ? (
                <Redirect to='/chat' />
              ) : <Redirect to='/' />
            }
          </Switch>
        </main>
      </div>
    </Router>
  }
}

export default App
