import React from 'react'
import Navbar from './Navbar'

import my from '../../data'

export default class ContactPage extends React.Component {
  render () {
    return (
      <section className='hero is-info is-fullheight'>
        <div className='hero-head'>
          <Navbar />
        </div>
        <div className='hero-body'>
          <div className='container'>
            <h2 className='title'>
              {my.contact.email}
              <br/>
              {my.contact.location}
              <br/>
              {my.contact.phone}
            </h2>
          </div>
        </div>
      </section>
    )
  }
}