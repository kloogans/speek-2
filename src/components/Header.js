import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return <header>
      <Link to='/'>
        <h1>BONER GARAGE</h1>
      </Link>
    </header>
  }
}

export default Header
