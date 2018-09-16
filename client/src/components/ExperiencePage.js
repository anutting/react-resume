import React from 'react'
import Navbar from './Navbar'

import my from '../../data'

export default class ExperiencePage extends React.Component {
  render () {
    return (
      <section className='hero is-info is-fullheight'>
        <div className='hero-head'>
          <Navbar />
        </div>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Work Experience</h1>
            {my.professions.map((profession,i) => (
              <div key={i} className='notification is-info is-narrow'>
                <p className='title'>{profession.employer}</p>
                <p className='subtitle'>{profession.title}. {profession.startDate} - {profession.endDate}</p>
                <p></p>
                <ul>
                  {profession.responsibilities.map((responsibility,j) => (
                    <li key={j}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}