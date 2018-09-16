import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  // Keep track of whether the hamburge menu is toggled or not
  state = { isMenuActive: false }

  // Event to update the isMenuActive flag
  toggleMenu = () => this.setState(oldState => Object.assign({}, oldState, { isMenuActive: !oldState.isMenuActive}))

  // Return the proper class when the menu is active
  activeClass = () => this.state.isMenuActive ? 'is-active' : ''

  render () {
    return (
      <div className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to="/">
              <span className='icon is-large'>
                <i className='fas fa-2x fa-home'/>
              </span>
            </Link>
            <span className={`navbar-burger ${this.activeClass()}`} data-target='navbarMenu' onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id='navbarMenu' className={`navbar-menu ${this.activeClass()}`}>
            <div className='navbar-end'>
              <Link to="/experience" className='navbar-item'>Experience</Link>
              <Link to="/education" className='navbar-item'>Education</Link>
              <Link to="/contact" className='navbar-item'>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}