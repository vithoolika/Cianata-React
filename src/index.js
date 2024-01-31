import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import Home from './views/home'
import Blog3 from './views/blog3'
import Blog5 from './views/blog5'
import Blog from './views/blog'
import Blog1 from './views/blog1'
import Blog4 from './views/blog4'
import Blog2 from './views/blog2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Contact} exact path="/contact" />
        <Route component={Home} exact path="/" />
        <Route component={Blog3} exact path="/blog3" />
        <Route component={Blog5} exact path="/blog5" />
        <Route component={Blog} exact path="/blog" />
        <Route component={Blog1} exact path="/blog1" />
        <Route component={Blog4} exact path="/blog4" />
        <Route component={Blog2} exact path="/blog2" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
