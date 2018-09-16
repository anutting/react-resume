import React from 'react'
import Navbar from './Navbar'

import my from '../../data'

export default class EducationPage extends React.Component {
  render () {
    return (
      <section className='hero is-info is-fullheight'>
        <div className='hero-head'>
          <Navbar />
        </div>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Education</h1>
            {my.education.map((education,i) => (
              <div key={i} className='notification is-info'>
                <p className='title'>{education.school}</p>
                <p className='subtitle'>{education.description}</p>
                <p>{education.startDate} - {education.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}