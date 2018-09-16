import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const LoadHomePage = Loadable({
  loader: () => import('./components/HomePage'),
  loading: () => <div>Loading...</div>
})

const LoadExperiencePage = Loadable({
  loader: () => import('./components/ExperiencePage'),
  loading: () => <div>Loading...</div>
})

const LoadEducationPage = Loadable({
  loader: () => import('./components/EducationPage'),
  loading: () => <div>Loading...</div>
})

const LoadContactPage = Loadable({
  loader: () => import('./components/ContactPage'),
  loading: () => <div>Loading...</div>
})

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={LoadHomePage}/>
      <Route exact path='/experience' component={LoadExperiencePage}/>
      <Route exact path='/education' component={LoadEducationPage}/>
      <Route exact path='/contact' component={LoadContactPage}/>
    </Switch>
  )
}