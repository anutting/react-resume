import React from 'react'
import Navbar from './Navbar'

import my from '../../data'

export default class HomePage extends React.Component {
  render () {
    return (
      <section className='hero is-info is-fullheight'>
        <div className='hero-head'>
          <Navbar />
        </div>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>{my.name}</h1>
            <h2 className='subtitle'>{my.summary}</h2>
            <ul>
              {my.experience.map((exp,i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}